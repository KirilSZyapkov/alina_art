'use server';

import { auth } from '@clerk/nextjs/server';
import { productCreateSchema } from '@/lib/product.zod_schema';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '@/lib/product.service';
import { revalidatePath } from 'next/cache';

export async function getProductsAction() {
  return getAllProducts();
}

export async function createProductAction(formData: FormData) {
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  const userId = "test";

  const images = formData
    .getAll('images')
    .filter(f => f instanceof File && f.size > 0) as File[];

  const rawData = {
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
    images
  };

  const parsed = productCreateSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors
    }
  };

  await createProduct(parsed.data, userId);
  revalidatePath('/admin/dashboard/list');
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
