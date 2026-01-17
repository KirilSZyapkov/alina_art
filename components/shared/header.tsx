"use client";

import { useState } from "react";
import { LayoutGrid, Menu, MessageCircleQuestionMark, NotebookTabs } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Header(){
    const [open, setOpen] = useState(false);
    return (
        <nav className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link href="/" className="text-2xl font-bold text-gray-800">Alina Art </Link>
                <div className="hidden items-center gap-6 sm:flex">
                    <Link href="/" className="text-gray-700 hover:text-gray-400 transition-colors flex items-center gap-2">
                        <LayoutGrid /> <span className="text-xl">Продукти</span>
                    </Link>
                    <Link href="/about-us" className="text-gray-700 hover:text-gray-400 transition-colors flex items-center gap-2">
                        <NotebookTabs /> <span className="text-xl">За нас</span>
                    </Link>
                    <Link href="/help" className="text-gray-700 hover:text-gray-400 transition-colors flex items-center gap-2">
                        <MessageCircleQuestionMark/> <span className="text-xl">Помощ</span>
                    </Link>
                </div>
                <Button 
                onClick={()=> setOpen(!open)}
                className="sm:hidden p-2 text-gray-700 hover:text-gray-400 transition-colors cursor-pointer"
                    >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
            {open && <div className="sm:hidden border-t border-gray-300 bg-white shadow-md">
                <div className="flex flex-col space-y-4 p-4">
                    <Link href="/" className="text-gray-700 hover:text-gray-400 transition-colors flex items-center gap-2">
                        <LayoutGrid /> <span className="text-xl">Продукти</span>
                    </Link>
                    <Link href="/about-us" className="text-gray-700 hover:text-gray-400 transition-colors flex items-center gap-2">
                        <NotebookTabs /> <span className="text-xl">За нас</span>
                    </Link>
                    <Link href="/help" className="text-gray-700 hover:text-gray-400 transition-colors flex items-center gap-2">
                        <MessageCircleQuestionMark /> <span className="text-xl">Помощ</span>
                    </Link>
                </div>
            </div>}
        </nav>
    )
}