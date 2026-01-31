
import { z } from 'zod';

export const productCreateSchema = z.object({
  ownerId: z.string().min(1),
  title: z.string().min(3, 'Title is required!'),
  price: z.string().min(1,'Price can not be 0 or negative!'),
  description: z.string().min(10),
  images: z.array(z.instanceof(File)),
});

export type ProductCreateInput = z.infer<typeof productCreateSchema>
export const productUpdateSchema = productCreateSchema.partial(); 
