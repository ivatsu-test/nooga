import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  image: z.string(),
  emailVerified: z.boolean().nullable(),
});

export const usersSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;
export type Users = z.infer<typeof usersSchema>;
