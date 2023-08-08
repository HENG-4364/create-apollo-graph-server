import { knx } from "src/connections/CreateKnexConnectios";

export const GetAllProductcategories = async ()=>{
    const getAllProductcategories = await knx("product_categories");
    return getAllProductcategories;
}