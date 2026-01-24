import { auth } from '@clerk/nextjs/server';
import { NewProductForm } from "@/app/(admin)/_components/newProductForm";
import { createProductAction } from '@/app/actions/product.actions';
import { redirect } from 'next/navigation';

import z from 'zod';
import { productCreateSchema } from '@/lib/product.zod_schema';

export default async function NewProductPage() {

    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    };



    return (
        <NewProductForm createNewProduct={createNewProduct} />
    )
}

async function createNewProduct(formData:z.infer< typeof productCreateSchema>) {
    "use server";
    
    const product = await createProductAction(formData);
    redirect(`/application/dashboard/list`);
}