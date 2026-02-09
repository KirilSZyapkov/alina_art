import {getProductByIdAction} from "@/app/actions/product.actions";
import {createCommentAction} from "@/app/actions/commet.actions";
import ImageView from "@/components/shared/imageView";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {NewCommentForm} from "@/components/shared/commentForm";
import {Card, CardContent} from "@/components/ui/card";
import OrderForm from "@/components/shared/orderForm";

export default async function ProductDetailsPage({params}: { params: Promise<{ productId: string }> }) {
  const {productId} = await params;

  const product = await getProductByIdAction(productId);
  const images = product?.images || [];
  const comments = product?.comments || [];

  if(!product){
    throw new Error("Възникна проблем! Моля опитайте по-късно!");
  };

  async function createNewComment(content: string) {
    "use server";
    const newRawComment = {
      content,
      productId
    };
    await createCommentAction(newRawComment);
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Product Details Section */}
      <div className="container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
            <ImageView images={images}/>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-center bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="flex flex-col gap-6 overflow-auto">
              <div>
                <h1
                  className="flex flex-col text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-2">
                  {product?.title}
                </h1>
                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                                        € {Number(product?.price).toFixed(2)}
                                    </span>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                {product?.description}
              </p>
            </div>

            <Button
              asChild
              className="mt-8 sm:mt-10 w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              <a href="#order">
                Поръчай сега
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-8 sm:my-12"/>

        {/* Comments Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Отзиви
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              {comments.length} {comments.length === 1 ? 'отзив' : 'отзива'}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <NewCommentForm createNewComment={createNewComment} countComments={comments.length}/>
          </div>

          {/* Comments List */}
          <div className="space-y-4 max-h-287.5 overflow-y-auto">
            {comments.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 text-center">
                <p className="text-gray-500 text-base sm:text-lg">
                  Все още няма отзиви за този продукт.
                </p>
              </div>
            ) : (
              comments.map((comment) => (
                <Card key={comment.id}
                      className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {comment.content}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        <Separator className="my-8 sm:my-12"/>

        {/* Order Section */}
        <div id="order" className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Готови ли сте да поръчате?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Попълнете формата по-долу, за да направите вашата поръчка
          </p>
          <OrderForm price={product?.price} productId={product?.id} ownerId={product?.ownerId}/>
        </div>
      </div>
    </section>
  )
}