import {ActionReducerMap} from "@ngrx/store";

import {AppStateModel} from "./app.state";
import {productListPageReducers} from "../pages/product-list-page/state-management/product-list-page.reducers";
import {productDetailPageReducers} from "../pages/product-detail-page/state-management/product-detail-page.reducers";
import {cartPageReducers} from "../pages/cart-page/state-management/cart-page.reducers";

export const appReducers: ActionReducerMap<AppStateModel, any> = {
    productListPage: productListPageReducers,
    productDetail: productDetailPageReducers,
    cartPage: cartPageReducers
}
