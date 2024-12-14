"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateTwoFactorToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { email, password, name, code } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);
    const twoFactorToken = await getTwoFactorTokenByEmail(email);
    if (code && twoFactorToken?.token == code) {
      try {
        await db.user.update({
          where: {
            id: existingUser?.id,
          },
          data: {
            emailVerified: new Date(),
            email: existingUser?.email,
          },
        });
        const twoFactorToken = await getTwoFactorTokenByEmail(email);
        await signIn("credentials", {
          email,
          password,
          redirectTo: undefined,
        });
        await db.twoFactorToken.delete({
          where: {
            id: twoFactorToken?.id,
          },
        });
        return { success: "Register successful" };
      } catch (error) {
        console.log(error);
      }
    }

    if (existingUser && twoFactorToken) {
      const twoFactor = await generateTwoFactorToken(email);
      const generatedCode = twoFactor.token;
      await sendVerificationEmail(email, generatedCode);
      return {
        success: "Confirmation email sent",
        token: generatedCode,
        twoFactor: true,
      };
    }

    if (existingUser) {
      return { error: "Email already in use!" };
    }

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const twoFactor = await generateTwoFactorToken(email);
    const generatedCode = twoFactor.token;
    await sendVerificationEmail(email, generatedCode);
    return { twoFactor: true };
  } catch (error) {
    console.log(error);
    return { error: "Internal Server error" };
  }
};
