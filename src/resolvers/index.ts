import { CreateProductCategory } from './ProductCategories/Mutation/createProductCategory';
import { RemoveProductCategory } from './ProductCategories/Mutation/removeProductCategory';
import { UpdateProductCategory } from './ProductCategories/Mutation/updateProductCategory';
import { GetAllProductcategories } from './ProductCategories/Query/GetAllProductCategories';
import { GetProductCategoryDetail } from './ProductCategories/Query/GetProductCategoryDetail';
import { CreateProduct } from './Products/Mutation/CreateProduct';
import { RemoveProduct } from './Products/Mutation/RemoveProduct';
import { UpdateProduct } from './Products/Mutation/UpdateProduct';
import { GetAllProducts } from './Products/Query/GetAllProducts';
import { GetProductDetail } from './Products/Query/GetProductDetail';
import { CreateStudent } from './Students/Mutation/CreateStudent';
import { RemoveStudent } from './Students/Mutation/RemoveStudent';
import { UpdateStudent } from './Students/Mutation/UpdateStudent';
import { GetAllStudents } from './Students/Query/GetAllStudents';
import { GetStudentDetail } from './Students/Query/GetStudentDetail';
import { CreateSubject } from './Subjects/Mutation/CreateSubject';
import { RemoveSubject } from './Subjects/Mutation/RemoveSubject';
import { UpdateSubject } from './Subjects/Mutation/updateSubject';
import { GetAllSubjects } from './Subjects/Query/GetAllSubjects';
import { GetSubjectDetail } from './Subjects/Query/GetSubjectDetail';
import { CreateUserMutation } from './Users/CreateUserMutation';
import { UserLoginMutation } from './Users/UserLoginMutation';

export const Resolvers = {
  Query: {
    Students: GetAllStudents,
    Subjects: GetAllSubjects,
    subject: GetSubjectDetail,
    student: GetStudentDetail,
    products: GetAllProducts,
    product: GetProductDetail,
    productCategories: GetAllProductcategories,
    productCategory: GetProductCategoryDetail,
  },
  Mutation: {
    CreateSubject: CreateSubject,
    UpdateSubject: UpdateSubject,
    RemoveSubject: RemoveSubject,
    CreateStudent: CreateStudent,
    UpdateStudent: UpdateStudent,
    RemoveStudent: RemoveStudent,
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
