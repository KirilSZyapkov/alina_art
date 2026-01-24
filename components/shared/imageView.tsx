"use client";

import Image from "next/image";

import { ProductImage } from "@/drizzle/schema";
import { useState } from "react";

export default function ImageView({ images }: { images: ProductImage[] }) {
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <div className="flex items-start md:w-1/2 w-full shadow-lg">
            <div className="flex flex-col gap-3 rounded-lg object-cover w-fit">
                {images.map((image, index) => (
                    <Image
                        src={image.url}
                        key={index}
                        alt={`Product Image ${index + 1}`}
                        className="brightness-45 hover:brightness-95 transition-all cursor-pointer"
                        style={{objectFit: "contain", height: "30%", width: "100%"}}
                        width={70}
                        height={150}
                        onClick={()=>setImgIndex(index)}
                    />
                ))}
            </div>
            <div className="h-[550px] w-full">
                <Image
                    src={images[imgIndex]?.url}
                    alt="Main Product Image"
                    style={{objectFit: "contain", height: "100%", width: "100%"}}
                    width={500}
                    height={550}
                />
            </div>
        </div>
    )
}