import { UserRole } from "@prisma/client";
import * as z from "zod";


export const propertySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  typeId: z.number().int("Type ID must be an integer"),
  statusId: z.number().int("Status ID must be an integer"),
  location: z.object({
    streetAddress: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    region: z.string(),
    landmark: z.string(),
    altitude: z.number(),
    latitude: z.number(),
  }),
  feature: z.object({
    bedrooms: z.number().min(0),
    bathrooms: z.number().min(0),
    parkingSpots: z.number().min(0),
    area: z.number().min(1),
    hasSwimmingPool: z.boolean(),
    hasGardenYard: z.boolean(),
    hasBalcony: z.boolean(),
  }),
  propertyType: z.string().min(3),

  contact: z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().email(),
  }),
  images: z.custom<FileList>((val) => val instanceof FileList, "Required")
    .refine((files) => files.length > 0, `Required`),
});

export type PropertySchemaType = z.infer<typeof propertySchema>

export const SettingsSchema = z.object({
  name: z.optional(z.string().min(3, {
    message: "Name required atleast 3 characters"
  })),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6))
}).refine((data) => {
  if (data.password && !data.newPassword) {
    return false;
  }
  if (!data.password && data.newPassword) {
    return false;
  }
  return true;
}, {
  message: "New Password is required",
  path: ["newPassword"]
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  })
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  })
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string())
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  code: z.optional(z.string())
});
