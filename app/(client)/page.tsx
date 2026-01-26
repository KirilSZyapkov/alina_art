import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/product.service";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <article className="mx-auto max-w-7xl px-4 h-screen">
      <h1 className="mb-8 mt-8 text-3xl font-bold tracking-tight text-center">
        Ръчно изработени подаръци
      </h1>


      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="p-4">
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
                  {product.price} €
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </article>
  );
}
