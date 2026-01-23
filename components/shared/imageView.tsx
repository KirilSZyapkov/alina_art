"use client";

import Image from "next/image";

import { ProductImage } from "@/drizzle/schema";
import { useState } from "react";

export default function ImageView({ images }: { images: ProductImage[] }) {
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <div className="flex gap-4 items-start">
            <div className="flex flex-col gap-3 aspect-square rounded-lg border-2 border-gray-200 dark:border-gray-700 group">
                {images.map((image, index) => (
                    <Image
                        src={image.url}
                        key={index}
                        alt={`Product Image ${index + 1}`}
                        className="object-cover brightness-55 hover:brightness-95 transition-all cursor-pointer"
                        width={150}
                        height={150}
                        onClick={()=>setImgIndex(index)}
                    />
                ))}


            </div>
            <div>
                <Image
                    src={images[imgIndex]?.url}
                    alt="Main Product Image"
                    className="object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                    width={150}
                    height={150}
                />
            </div>
        </div>
    )
}