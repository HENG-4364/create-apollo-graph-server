import { knx } from "src/connections/CreateKnexConnectios";

export const GetProductCategoryDetail = async(_,{id}:{id:number},{})=>{
    const getProductCategoryDetail = await knx("product_categories").where({id}).first();
    return getProductCategoryDetail;
}