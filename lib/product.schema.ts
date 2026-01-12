// lib/product.schema.ts
import { z } from 'zod';

export const productCreateSchema = z.object({
  ownerId: z.string().min(1),
  title: z.string().min(3, 'Title is required!'),
  price: z.number().positive('Price can not be 0 or negative!'),
  description: z.string().min(10),
  images: z.array(z.instanceof(File)).optional(),
  createdAt,
  updatedAt,
});

export type ProductCreateInput = z.infer<typeof productCreateSchema>
