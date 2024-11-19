import { z } from "zod";

export const schema = z.object({
  username: z.string().min(1, "The Username is Mandatory"),
  password: z
    .string()
    .min(5, "The Pass length must be upper than 5 characters"),
});

export type FormData = z.infer<typeof schema>;

export interface payload {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string; // JWT access token
  refreshToken: string; // JWT refresh token
}
