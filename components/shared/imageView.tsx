export default function ImageView({image, index}:{ image:{url: string; alt: string;}; index:number}) {
    return(
        <div className="flex gap-4 justify-between items-start">
                    <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 group">
                        
                            <Image
                            url={image.url},
                            key={index}
                            alt={`Product Image ${index + 1}`}
                            className="object-cover group-hover:brightness-75 transition-all"
                            />
                        
                    </div>
                    <div>
                        <Image
                        url={image.url}
                        alt="Main Product Image"
                        className="object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                        />
                    </div>
                </div>
    )
}