// lib/product.service.ts
import db from '@/drizzle/db';
import { productsTable } from '@/drizzle/schemas/products.schema';
import { productImages } from '@/drizzle/schemas/product-images.schema';
import { eq } from 'drizzle-orm';
import { ProductCreateInput } from './product.zod_schema';
import { uploadProductImage } from './image.service';

export async function getAllProducts<T>() {
  return db.query.productsTable.findMany({
    with: {
      images: {
        orderBy: (images, { asc }) => [asc(images.order)]
      }
    },
  });
}

export async function createProduct(data: ProductCreateInput, ownerId: string) {
  const rawData = {
    id: "test_id",
    title: data.title,
    price: data.price,
    description: data.description,
    ownerId: "test_owner_id",
  };
  const [newProduct] = await db.insert(productsTable).values(rawData).returning();

  if (data.images?.length > 0) {
    const uploaded = await uploadProductImage(data.images, String(newProduct.id));

    await db.insert(productImages).values(
      uploaded.map(i => ({
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
  data: Partial<{ title: string; price: string; description: string; imgUrl: string }>
) {
  return db.update(productsTable).set(data).where(eq(productsTable.id, id));
}

export async function deleteProduct(id: string) {
  return db.delete(productsTable).where(eq(productsTable.id, id));
}
