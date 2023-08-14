import { knx } from "src/connections/CreateKnexConnectios";
import { ProductCategoryInput } from "src/types/ProductCategory"

export const UpdateProductCategory=async (_,{id,input}:{id:number,input:ProductCategoryInput},{})=>{
  const {category_name}=input;
  const updateProductCategory =await knx("product_categories").update({category_name}).where({id})
  if(updateProductCategory){
    return true;
  }else{
    return false;
  }
}