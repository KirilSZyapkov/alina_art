// lib/product.schema.ts
import { z } from 'zod';

export const productCreateSchema = z.object({
  title: z.string().min(3, 'Title is required!'),
  price: z.number().positive('Price can not be 0 or negative!'),
  description: z.string().min(10),
  image: z.instanceof(File)
});

export type ProductCreateInput = z.infer<typeof productCreateSchema>
