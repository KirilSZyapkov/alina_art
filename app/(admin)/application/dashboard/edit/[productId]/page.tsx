import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getProductByIdAction, updateProductAction } from '@/app/actions/product.actions';
import { EditProductForm } from '@/app/(admin)/_components/editProductForm';
import { formSchema } from '@/app/(admin)/_components/newProductForm';
import { productUpdateSchema } from '@/lib/product.zod_schema';
import z from 'zod';

type PrpductUpdateSchema = z.infer<typeof productUpdateSchema>;

export default async function EditProductPage({ params }: { params: Promise<{ productId: string }> }) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    };

    const { productId } = await params;
    if (!productId) {
        throw new Error("Product ID is required");
    };

    const product = await getProductByIdAction(productId);

    if (!product) {
        throw new Error("Product not found");
    };

    return (
        <EditProductForm handleUpdateProduct={handleUpdateProduct} product={product} />
    )

}

 async function handleUpdateProduct(formData: PrpductUpdateSchema, productId: string) {
    "use server";
    const updatedProduct = await updateProductAction(productId, formData)
    };
