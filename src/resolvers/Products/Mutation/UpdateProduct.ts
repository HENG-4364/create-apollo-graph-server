import { knx } from "src/connections/CreateKnexConnectios"
import { ProductInput } from "src/types/Products"

export const UpdateProduct =async(_,{id,input}:{id:number,input:ProductInput},{})=>{
  const {product_name,summary,description,image,category_id}=input;
  const updateProduct =await knx("products").update({product_name,summary,description,image,category_id}).where({id})
  if(updateProduct){
    return true;
  }else{
    return false;
  }
}