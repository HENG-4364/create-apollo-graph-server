import { knx } from 'src/connections/CreateKnexConnectios';

export const GetAllProducts = async (_,{ category_id }: { category_id: number },{}) => {
  const GetAllProductsQuery = knx('products');
  if (category_id) {
    GetAllProductsQuery.where({ category_id: category_id });
  }
  const GetAllProducts = await GetAllProductsQuery;
  const getAllProductcategories = await knx('product_categories');
  return GetAllProducts.map(async (item) => {
    const Productcategory = getAllProductcategories.find(
      (x) => x.id === item.category_id
    );
    return {
      ...item,
      category: Productcategory,
    };
  });
};
