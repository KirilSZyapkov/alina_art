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
  
  // Да махна тестовия userId и да откоригирам ключа, с който се търсят конкретните продукти

  // const {userId} = await auth();
  // if (!userId) throw new Error('Unauthorized');
  const userId = "";
  return getAllProducts(userId);
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
  return getProductById(id);
}

export async function updateProductAction(
  id: string,
  data: Partial<typeof productCreateSchema>
) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  await updateProduct(id, data);
  revalidatePath('/admin/dashboard/list');
}

export async function deleteProductAction(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  await deleteProduct(id);
  revalidatePath('/admin/dashboard/list');
}
