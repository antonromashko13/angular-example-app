import {ProductModel} from "../../../shared/models/product.model";
import {ProductTypeModel} from "../../../shared/models/product-type.model";

export interface ProductListPageStateModel {
  productList: ProductModel[];
  productTypes: ProductTypeModel[]
}

export const initialProductListPageState: ProductListPageStateModel = {
  productList: [],
  productTypes: [],
}
