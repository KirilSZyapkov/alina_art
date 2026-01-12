'use server';

import { userCreateSchema } from '@/lib/user.schema';
import {
  createUser,
  getUser
} from '@/lib/user.service';

export async function getUserAction(id:string) {
    return getUser(id);
}

export async function createUserAction(params:{
    id:string,
    firstName?:string,
    secondName?:string,
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

    if(!parsed.success){
        return{
            errors: parsed.error.flatten().fieldErrors
        }
    };

    await createUser(parsed.data);
}