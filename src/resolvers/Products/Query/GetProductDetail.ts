import { knx } from "src/connections/CreateKnexConnectios";

export const GetProductDetail = async (_, { id }: { id: number }, { }) => {

    const getProductDetail = await knx("products").where({ id }).first();
    const getProductCategory = await knx("product_categories").where({ id: getProductDetail.category_id }).first();

    return {
        ...getProductDetail,
        category: getProductCategory,

    };


}