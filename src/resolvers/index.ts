import { CreateProductCategory } from "./ProductCategories/Mutation/createProductCategory";
import { RemoveProductCategory } from "./ProductCategories/Mutation/removeProductCategory";
import { UpdateProductCategory } from "./ProductCategories/Mutation/updateProductCategory";
import { GetAllProductcategories } from "./ProductCategories/Query/GetAllProductCategories";
import { GetProductCategoryDetail } from "./ProductCategories/Query/GetProductCategoryDetail";
import { CreateProduct } from "./Products/Mutation/CreateProduct";
import { RemoveProduct } from "./Products/Mutation/RemoveProduct";
import { UpdateProduct } from "./Products/Mutation/UpdateProduct";
import { GetAllProducts } from "./Products/Query/GetAllProducts";
import { GetProductDetail } from "./Products/Query/GetProductDetail";
import { CreateUserMutation } from "./Users/CreateUserMutation";
import { GetAllUsers } from "./Users/Query/GetAllUsers";
import { UserLoginMutation } from "./Users/UserLoginMutation";

export const Resolvers = {
  Query: {
    products: GetAllProducts,
    product: GetProductDetail,
    productCategories: GetAllProductcategories,
    productCategory: GetProductCategoryDetail,
    users: GetAllUsers,
  },
  Mutation: {
    createProduct: CreateProduct,
    updateProduct: UpdateProduct,
    removeProduct: RemoveProduct,
    createProductCategory: CreateProductCategory,
    updateProductCategory: UpdateProductCategory,
    removeProductCategory: RemoveProductCategory,
    createUser: CreateUserMutation,
    userLogin: UserLoginMutation,
  },
};
