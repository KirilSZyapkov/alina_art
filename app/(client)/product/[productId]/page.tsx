import { getProductByIdAction } from "@/app/actions/product.actions";
import ImageView from "@/components/shared/imageView";

export default async function ProductDetailsPage({ params }: { params: Promise<{ productId: string }> }){
    const { productId } = await params;

    const product = await getProductByIdAction(productId);
    const images = product?.images || [];

    return(
        <section className="border-2 border-red-500">
            <div className="border-2 border-green-500">
               <ImageView images={images} />
                <div className="border-2 border-blue-500">
                    <div>
                        <h1>{product?.title}</h1>
                        <span>${Number(product?.price).toFixed(2)}</span>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>
            <div>
                {/* Reviews Section */}
                <h2>Отзиви {0}</h2>
                <div>
                    {/* Reviews will be displayed here */}
                </div>
            </div>
            <div>
                {/* Make a purchase button */}
            </div>
        </section>
    )
}