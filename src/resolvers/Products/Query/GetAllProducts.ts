import { knx } from "src/connections/CreateKnexConnectios";

export const GetAllProducts = async (
  _,
  {
    category_id,
    paginationInput,
  }: { category_id: number; paginationInput: PaginationInput },
  {}
) => {
  const GetAllProductsQuery = knx("products");
  if (category_id) {
    GetAllProductsQuery.where({ category_id: category_id });
  }
  const { size, page } = paginationInput;
  if (size && page) {
    const offset = (page - 1) * size;
    GetAllProductsQuery.offset(offset).limit(size);
  }
  const GetAllProducts = await GetAllProductsQuery;
  const getAllProductcategories = await knx("product_categories");
  const getAllProducts = await knx("products");
  return {
    data: GetAllProducts.map(async (item) => {
      const Productcategory = getAllProductcategories.find(
        (x) => x.id === item.category_id
      );
      return {
        ...item,
        category: Productcategory,
      };
    }),
    pagination: {
      size: paginationInput?.size,
      total: getAllProducts?.length,
      current: paginationInput?.page || 1,
    },
  };
};
