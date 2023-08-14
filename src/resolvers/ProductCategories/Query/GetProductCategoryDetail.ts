import { knx } from "src/connections/CreateKnexConnectios";

export const GetProductCategoryDetail = async(_,{id}:{id:number},{})=>{
    const getProductCategoryDetail = await knx("product_categories").where({id: id}).first();
    const getAllProducts = await knx('products').where({category_id:getProductCategoryDetail?.id});
    return {
       ...getProductCategoryDetail,
        products:getAllProducts
    }
    
}