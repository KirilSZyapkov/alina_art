import { z } from 'zod';

export const commetnCreateSchema = z.object({
  productId: z.string().min(1),
  content: z.string().min(3, 'Text is required!'),
});

export type CommetCreateInput = z.infer<typeof commetnCreateSchema>;

