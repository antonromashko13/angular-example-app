import {ProductModel} from "../../../shared/models/product.model";

export interface ProductDetailPageStateModel {
    product: ProductModel | null;
}

export const initialProductDetailPageState: ProductDetailPageStateModel = {
    product: null,
}
