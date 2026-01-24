import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getProductByIdAction, updateProductAction } from '@/app/actions/product.actions';
import { EditProductForm } from '@/app/(admin)/_components/editProductForm';
import { formSchema } from '@/app/(admin)/_components/newProductForm';
import { editProductSchema } from '../../../../_components/editProductForm';
import z from 'zod';

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

 async function handleUpdateProduct(formData: z.infer<typeof editProductSchema>, productId: string) {
    "use server";
    const updatedProductData = {
        title: formData.title,
        price: formData.price,
        description: formData.description,
        images: formData.newImages
    }
    const updatedProduct = await updateProductAction(productId, updatedProductData)
    };
