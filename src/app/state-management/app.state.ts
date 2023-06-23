import { initialProductListPageState, ProductListPageStateModel } from "../pages/product-list-page/state-management/product-list-page.state";
import {initialProductDetailPageState, ProductDetailPageStateModel} from "../pages/product-detail-page/state-management/product-detail-page.state";
import {CartPageStateModel, initialCartPageState} from "../pages/cart-page/state-management/cart-page.state";

export interface AppStateModel {
    productListPage: ProductListPageStateModel,
    productDetail: ProductDetailPageStateModel,
    cartPage: CartPageStateModel
}

export const  initialAppState: AppStateModel = {
    productListPage: initialProductListPageState,
    productDetail: initialProductDetailPageState,
    cartPage: initialCartPageState
}

export function getInitialState(): AppStateModel {
    return initialAppState;
}