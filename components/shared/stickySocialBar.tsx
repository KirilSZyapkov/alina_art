"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function StickySocialBar(){
    return(
       <div className="fixed top-[50%] right-0 flex flex-col items-center gap-2 transition-colors text-2xl px-2">
            <Link href="#" className="hover:bg-gray-300 p-2 rounded-xl hover:text-blue-700"><Facebook /></Link> 
            <Link href="#" className="hover:bg-gray-300 p-2 rounded-xl hover:text-orange-700"><Instagram /></Link> 
        </div>
    )
}