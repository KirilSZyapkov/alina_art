import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { getAllProductsWithImages } from "@/lib/product.service";

export async default function HomePage() {
  const products = await getAllProductsWithImages();
  
  return (
    <article className="mx-auto max-w-7xl px-4 py-8">
<h1 className="mb-8 text-3xl font-bold tracking-tight">
Ръчно изработени подаръци
</h1>


<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
{products.map((product) => (
<Link
key={product.id}
href={`/products/${product.id}`}
className="group"
>
<Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
<CardHeader className="p-0">
<AspectRatio ratio={1}>
<Image
src={
product.images?.[0]?.url ||
"/placeholder.png"
}
alt={product.title}
fill
className="object-cover transition-transform group-hover:scale-105"
/>
</AspectRatio>
</CardHeader>


<CardContent className="p-3">
<h2 className="line-clamp-2 text-sm font-medium">
{product.title}
</h2>
</CardContent>


<CardFooter className="p-3 pt-0">
<span className="text-sm font-semibold">
{product.price} лв
</span>
</CardFooter>
</Card>
</Link>
))}
</div>
</article>
  );
}
