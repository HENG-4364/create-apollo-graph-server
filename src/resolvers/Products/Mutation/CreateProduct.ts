import { knx } from "src/connections/CreateKnexConnectios"
import { ProductInput } from "src/types/Products"

export const CreateProduct =async(_,{input}:{input:ProductInput},{})=>{
  const {product_name,summary,description,image,category_id}=input;
  const createProduct= await knx("products").insert({product_name,summary,description,image,category_id});
  if(createProduct){
    return true;

  }else{
    return false;
  }
}