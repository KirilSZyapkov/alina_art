'use server';

import { auth } from '@clerk/nextjs/server';
import { productCreateSchema } from '@/lib/product.zod_schema';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById
} from '@/lib/product.service';
import { revalidatePath } from 'next/cache';
import z from 'zod';


export async function getProductsAction() {
  return getAllProducts();
}

export async function createProductAction(formData: z.infer<typeof productCreateSchema>) {

  const { userId } = await auth();
  
  if (!userId) throw new Error('Unauthorized');

  const parsed = productCreateSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors
    }
  };

  await createProduct(parsed.data, userId);
  revalidatePath('/admin/dashboard/list');
}

export async function getProductByIdAction(id: string) {
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');
  const userId = "test";
  return getProductById(id);
}

export async function updateProductAction(
  id: string,
  data: Partial<{ title: string; price: string; description: string; imgUrl: string }>
) {
  await updateProduct(id, data);
  revalidatePath('/admin/dashboard/list');
}

export async function deleteProductAction(id: string) {
  await deleteProduct(id);
  revalidatePath('/admin/dashboard/list');
}
