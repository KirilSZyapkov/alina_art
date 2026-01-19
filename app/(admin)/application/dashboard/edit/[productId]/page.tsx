import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getProductByIdAction } from '@/app/actions/product.actions';
import { EditProductForm } from '@/app/(admin)/_components/editProductForm';

import { formSchema } from '@/app/(admin)/_components/newProductForm';

export default async function EditProductPage({ params }: { params: Promise<{ productId: string }> }) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    };

    const { productId } = await params;
    if (!productId) {
        throw new Error("Product ID is required");
    }

    const product = await getProductByIdAction(productId);

    if (!product) {
        throw new Error("Product not found");
    }

    return (
        // <EditProductForm handleUpdateProduct={handleUpdateProduct} product={product} />
        null
    )

}


async function handleUpdateProduct(formData: typeof formSchema) {
    "use server";
}