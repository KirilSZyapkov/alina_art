import { auth } from '@clerk/nextjs/server';
import { NewProductForm } from "@/app/(admin)/_components/newProductForm";
import { getUserAction } from '@/app/actions/user.actions';
import {createProductAction} from '@/app/actions/product.actions';
import { redirect } from 'next/navigation';

import { formSchema } from '@/app/(admin)/_components/newProductForm';

export default async function ListPage() {

    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    };

    async function createNewProduct(formData: typeof formSchema) {
        "use server";
    }

    return (
        <NewProductForm createNewProduct={createNewProduct} />
    )
}