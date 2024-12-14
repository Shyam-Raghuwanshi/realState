"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn, signOut } from "@/auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Wrong credentials" };
  }

  if (existingUser.role !== "ADMIN") {
    return { error: "You are not authorized to login as admin" };
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isPasswordCorrect || password !== process.env.ADMIN_PASSWORD) {
    return { error: "Wrong credentials" };
  }

  try {
    await signOut();
    await signIn("credentials", {
      email,
      password,
      redirectTo: undefined,
    });
    return { success: true, message: "Logged in as admin" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
