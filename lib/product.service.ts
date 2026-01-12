// lib/product.service.ts
import { db } from '@/drizzle/db';
import { productsTable } from '@/drizzle/schemas/product.schema';
import { productImages } from '@/drizzle/schemas/product-images.schema';
import { eq } from 'drizzle-orm';
import { ProductCreateInput } from './product.schema';
import { uploadProductImage } from './image.service';

export async function getAllProducts() {
  return db.select().from(productsTable);
}

export async function createProduct(data: ProductCreateInput, ownerId: string) {
  const rawData = {
  title: data.title,
  price: data.price,
  description: data.description,
  };
  const [newProduct] = db.insert(productsTable).values(rawData).returning();

  if(data.image?.length){
    const uploaded = await uploadProductImage(data.images, String(newProduct.id));

    await db.insert(productImages).values(
      uploaded.map(i=>({
        productId: newProduct.id,
          url: i.url,
          order: i.order
      }))
    )
  }

  return newProduct;

}

export async function updateProduct(
  id: string,
  data: Partial<{ title: string; price: string; description:string; imgUrl:string }>
) {
  return db.update(productsTable).set(data).where(eq(productsTable.id, id));
}

export async function deleteProduct(id: string) {
  return db.delete(productsTable).where(eq(productsTable.id, id));
}
