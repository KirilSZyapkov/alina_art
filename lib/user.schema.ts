import { z } from 'zod';

export const userCreateSchema = z.object({
  id: z.string().min(1),
  firsName: z.string().min(3, "Name is required. Must be at least 3 characters"),
  secondName: z.string(),
  email: z.email().min(1),
  imgUrl: z.string(),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>
