import { knx } from "src/connections/CreateKnexConnectios";

export const GetAllProducts = async () => {
    const GetAllProducts = await knx("products");
    const getAllProductcategories =await knx("product_categories");
    return GetAllProducts.map(async (item) => {
        const Productcategory = getAllProductcategories.find((x) => x.id === item.category_id);      
        return {
            ...item,
            category: Productcategory
        }
    })
}