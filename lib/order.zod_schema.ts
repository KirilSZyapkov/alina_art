import { z } from 'zod';


export const orderCreateSchema = z.object({
  productId: z.string().min(1, "Please provide product id!"),
  adminId: z.string().min(1, "Please provide owner ID"),
  customerName: z.string().min(1, "Provide customer name"),
  customerEmail: z.string().min(1, "Provide customer email."),
  price: z.string().min(1, "Price is required!"),
  order_status: z.string().optional(),
});

export type OrderCreateInput = z.infer<typeof orderCreateSchema>;

