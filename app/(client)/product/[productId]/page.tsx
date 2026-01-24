import { getProductByIdAction } from "@/app/actions/product.actions";
import { createCommentAction } from "@/app/actions/commet.actions";
import ImageView from "@/components/shared/imageView";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { NewCommentForm } from "@/components/shared/commentForm";

export default async function ProductDetailsPage({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;

    const product = await getProductByIdAction(productId);
    const images = product?.images || [];
    const comments = product?.comments || [];

    async function createNewComment(content: string) {
        "use server";
        const newRawComment = {
            content,
            productId
        };
        await createCommentAction(newRawComment);
    }


    return (
        <section className="container mx-auto py-10 px-5 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-6 py-5 px-3">
                <ImageView images={images} />
                <div className=" md:w-1/2 w-full overflow-hidden shadow-lg">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-wide py-1 px-3">{product?.title}</h1>
                            <span className="text-sm pl-5 text-gray-500">€ {Number(product?.price).toFixed(2)}</span>
                        </div>
                        <p className="py-2 px-5 tracking-wide text-xl leading-8 text-gray-700">{product?.description}</p>
                    </div>
                    <Button asChild variant="secondary" className="mt-6 ml-5 px-6 py-3 text-lg ">
                        <Link href="#order">
                            Поръчай сега
                        </Link>
                    </Button>
                </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-6 py-5 px-3">
                {/* Reviews Section */}
                <h2 className="text-center text-3xl tracking-wide ">Отзиви {comments.length}</h2>
                <div>
                    <NewCommentForm createNewComment={createNewComment} countComments={comments.length} />
                </div>
                <div>
                    {/* Reviews will be displayed here */}
                </div>
            </div>

            <div id="order">
                {/* Make a purchase button */}
                <p>поръчка</p>
            </div>
        </section>
    )
}