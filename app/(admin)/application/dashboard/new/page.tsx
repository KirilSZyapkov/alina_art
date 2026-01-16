import {NewProductForm} from "@/_components/newProductForm";
import {createProductAction} from "@/app/actions/product.actions";

export default function NewProductPage(){
    
    return(
        <NewProductForm createNewProduct={createProductAction}}/>
    )
}

