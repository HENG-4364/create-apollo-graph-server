
import { knx } from "src/connections/CreateKnexConnectios";
import { ProductCategoryInput } from "src/types/ProductCategory";

export const CreateProductCategory = async(_,{input}:{input:ProductCategoryInput},{})=>{
  const {category_name}=input;
  const productCategory =await knx("product_categories").where({category_name}).first()
  if(productCategory){
    throw new Error('CategoryName already existed!');
  }
  const createProductCategory =await knx("product_categories").insert({category_name})
  if(createProductCategory){
    return true;

  }else{
    return false;
  }

}