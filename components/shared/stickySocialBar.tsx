"use client";

import Link from "next/link";

export default function StickySocialBar(){
    return(
       <div className="fixed top-[50%] right-0 border-2 border-red-500 flex flex-col items-center gap-2 transition-colors bg-white text-2xl">
            <Link href="#" >Facebook</Link> 
            <Link href="#" >Tik Tok</Link> 
            <Link href="#" >Instagram</Link> 
        </div>
    )
}