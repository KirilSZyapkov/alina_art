
import db from '@/drizzle/db';
import { productsTable } from '@/drizzle/schemas/products.schema';
import { productImages } from '@/drizzle/schemas/product-images.schema';
import { eq } from 'drizzle-orm';
import { ProductCreateInput } from './product.zod_schema';
import { uploadProductImage } from './image.service';


export async function getAllProducts(ownerId?: string) {
  return db.query.productsTable.findMany({
    // where: eq(productsTable.ownerId, ownerId),
    with: {
      images: true,
    },
  });
}

export async function createProduct(data: ProductCreateInput, ownerId: string) {
  const rawData = {
    title: data.title,
    price: data.price,
    description: data.description,
    ownerId,
  };
  const [newProduct] = await db.insert(productsTable).values(rawData).returning();

  if (data.images?.length > 0) {
    const uploaded = await uploadProductImage(data.images, ownerId, String(newProduct.id), newProduct.title);

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
  data: Partial<ProductCreateInput>
) {
 
  const updatedRawData = {
    title: data.title,
    price: data.price,
    description: data.description,
    ownerId: data.ownerId
  };

  const [updatedProduct] = await db.update(productsTable).set(updatedRawData).where(eq(productsTable.id, id)).returning();

  if (data?.images!.length > 0) {

    const uploaded = await uploadProductImage(data.images!, updatedProduct.ownerId, String(updatedProduct.id), updatedProduct.title);

    await db.insert(productImages).values(
      uploaded.map(i => ({
        productId: updatedProduct.id,
        url: i.url,
        order: i.order
      }))
    )
  };

  return updatedProduct;
}

export async function getProductById(id: string) {
  return db.query.productsTable.findFirst({
    where: eq(productsTable.id, id),
    with: {
      images: true,
      comments: true
    },
  })
}

export async function deleteProduct(id: string) {
  return db.delete(productsTable).where(eq(productsTable.id, id));
}
