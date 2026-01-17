import { auth, currentUser  } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import {createUserAction, getUserAction} from "../../actions/user.actions";

export default async function UserSync(){
    const { userId } =  await auth();

    if(!userId){
        redirect("/sign-in");
    };
    const user = await currentUser();
    
    if(!user) { 
     redirect("/sign-in");
    }

    try {
        const existingUser = await getUserAction(userId);

    if(!existingUser) {

        const newUser = {
            id: userId,
            firstName: user.firstName ?? '',
            secondName: user.lastName ?? '',
            email: user.emailAddresses[0]?.emailAddress ?? '',
            imgUrl: user.imageUrl ?? ''
        };
        await createUserAction(newUser);      
    }

    redirect("/application/dashboard");
    } catch (error: unknown) {
        throw new Error("User sync failed");
    }
    
    return null;
}