'use server';

import { productCreateSchema } from '@/lib/product.schema';
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
  const rawData = {
  title: formData.get("title"),
  price: formData.get("price"),
  description: formData.get("description"),
  image: formData.get("image")
  };

  const parsed = productCreateSchema.safeParse(rawData);

  if(!parsed.success){
    return{
      errors: parsed.error.flatten().fieldErrors
    }
  };

  await createProduct(parsed.data);
  revalidatePath('/admin/dashboard/list');
}

export async function updateProductAction(
  id: string,
  data: Partial<{ title: string; price: string; description:string; imgUrl:string }>
) {
  await updateProduct(id, data);
  revalidatePath('/admin/dashboard/list');
}

export async function deleteProductAction(id: string) {
  await deleteProduct(id);
  revalidatePath('/admin/dashboard/list');
}
