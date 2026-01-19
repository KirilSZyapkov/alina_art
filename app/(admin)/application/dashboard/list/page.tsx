import { auth } from '@clerk/nextjs/server';
import { getProductsAction } from '@/app/actions/product.actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming Shadcn Card components are available
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function ListPage() {

    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    };

    const allProducts = await getProductsAction();

    if (!allProducts.length) {
        return (
            <div className="flex items-center justify-center min-h-screen p-4">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6 text-center">
                        No products found
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Product List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProducts.map((p) => (
                        <Card key={p.id} className="shadow-lg">
                            <CardHeader>
                                <Image
                                    src={p.images[0].url || '/placeholder.png'}
                                    alt={p.title}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-48 rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle>{p.title}</CardTitle>
                                <p>{p.description}</p>
                                <p className="font-semibold">${p.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}