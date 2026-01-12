// lib/product.service.ts
import { db } from '@/drizzle/db';
import { productTable } from '@/drizzle/schemas/product.schema';
import { eq } from 'drizzle-orm';
import { ProductCreateInput } from './product.schema';
import { uploadProductImage } from './image.service';

export async function getAllProducts() {
  return db.select().from(productTable);
}

export async function createProduct(data: ProductCreateInput) {
  const imgUrl = await uploadProductImage(data.image);

  const rawData = {
  title: data.title,
  price: data.price,
  description: data.description,
  imgUrl
  };

  return db.insert(productTable).values(rawData);
}

export async function updateProduct(
  id: string,
  data: Partial<{ title: string; price: string; description:string; imgUrl:string }>
) {
  return db.update(productTable).set(data).where(eq(productTable.id, id));
}

export async function deleteProduct(id: string) {
  return db.delete(productTable).where(eq(productTable.id, id));
}
