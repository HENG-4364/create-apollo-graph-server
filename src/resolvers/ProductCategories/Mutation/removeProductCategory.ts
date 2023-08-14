import { knx } from "src/connections/CreateKnexConnectios"

export const RemoveProductCategory =async(_,{id}:{id:number},{})=>{
  const removeProductCategory =await knx("product_categories").del().where({id})
  if(removeProductCategory){
    return true;
  }else{
    return false;
  }

}