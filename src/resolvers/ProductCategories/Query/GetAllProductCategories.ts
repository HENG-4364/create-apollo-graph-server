import { knx } from 'src/connections/CreateKnexConnectios';

export const GetAllProductcategories = async () => {
  const getAllProducts = await knx('products');
  const getAllProductcategories = await knx('product_categories');
  return getAllProductcategories.map(async (category) => {
    const products = getAllProducts.filter((x) => x.category_id === category.id);
    return {
      ...category,
      products
     
    };
  });
};
