'use server';

import { userCreateSchema } from '@/lib/user.zod_schema';
import {
    createUser,
    getUser
} from '@/lib/user.service';

export async function getUserAction(id: string) {
    const user = await getUser(id);
    return user;
}

export async function createUserAction(params: {
    id: string,
    firstName?: string,
    secondName?: string,
    email: string,
    imgUrl: string
}) {
    const rawData = {
        id: params.id,
        firstName: params.firstName || "User",
        secondName: params.secondName || "",
        email: params.email,
        imgUrl: params.imgUrl
    };

    const parsed = userCreateSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors
        }
    };

    const user = await createUser(parsed.data);

    return user;
}