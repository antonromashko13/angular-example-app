import {ProductModel} from "../../../shared/models/product.model";

export interface CartPageStateModel {
    cartProductList: ProductModel[];
}

export const initialCartPageState: CartPageStateModel = {
    cartProductList: [],
}
