"use client";

import Image from "next/image";

import { ProductImage } from "@/drizzle/schema";
import { useState } from "react";

export default function ImageView({ images }: { images: ProductImage[] }) {
    const [imgIndex, setImgIndex] = useState(0)

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">No images available</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 sm:gap-3 overflow-x-auto md:overflow-x-visible w-full md:w-auto md:max-w-24">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setImgIndex(index)}
                        className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 border-2 ${imgIndex === index
                                ? 'border-blue-600 shadow-md'
                                : 'border-gray-200 hover:border-gray-400'
                            }`}
                    >
                        <Image
                            src={image.url}
                            alt={`Product Image ${index + 1}`}
                            className={`transition-all duration-200 ${imgIndex === index
                                    ? 'brightness-100'
                                    : 'brightness-75 hover:brightness-90'
                                }`}
                            style={{ objectFit: "cover" }}
                            width={80}
                            height={100}
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-sm flex-1 min-h-64 sm:min-h-80 lg:min-h-96">
                <Image
                    src={images[imgIndex]?.url}
                    alt="Main Product Image"
                    style={{ objectFit: "contain" }}
                    fill
                    className="transition-opacity duration-300"
                    priority
                />
            </div>
        </div>
    )
}