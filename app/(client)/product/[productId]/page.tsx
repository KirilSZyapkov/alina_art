import { getProductByIdAction } from "@/app/actions/product.actions";

export default async function ProductDetailsPage({ params }: { params: Promise<{ productId: string }> }){
    const { productId } = await params;

    const product = await getProductByIdAction(productId);
    const images = product?.images || [];

    return(
        <section>
            <div>
                {images.map((image, index)=> <ImageView image={image} index={index} />)}  
                <div>
                    <div>
                        <h1>{product?.name}</h1>
                        <span>${product?.price.toFixed(2)}</span>
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