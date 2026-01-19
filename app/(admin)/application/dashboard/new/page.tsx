import { auth } from '@clerk/nextjs/server';
import { NewProductForm } from "@/app/(admin)/_components/newProductForm";
import { getUserAction } from '@/app/actions/user.actions';
import {createProductAction} from '@/app/actions/product.actions';
import { redirect } from 'next/navigation';

import { formSchema } from '@/app/(admin)/_components/newProductForm';

export default async function NewProductPage() {

    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    };

  

    return (
        <NewProductForm createNewProduct={createNewProduct} />
    )
}

  async function createNewProduct(formData: typeof formSchema) {
        "use server";
    }