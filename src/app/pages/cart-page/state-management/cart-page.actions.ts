import {Action} from "@ngrx/store";
import {ProductModel} from "../../../shared/models/product.model";

export enum ECartPageActions {
    GetCartProductListRequest = '[CartPage] Get Cart product list Request',
    SetCartProductList = '[CartPage] Set Cart product list',
    AddProductToCartRequest = '[CartPage] Add Product To Cart Request',
    AddProductToCart = '[CartPage] Add Product To Cart'
}

export class GetCartProductListRequest implements Action {
    readonly type = ECartPageActions.GetCartProductListRequest;
}

export class SetCartProductList implements Action {
    readonly type = ECartPageActions.SetCartProductList;
    constructor(public payload: ProductModel[]) {}
}

export class AddProductToCartRequest implements Action {
    readonly type = ECartPageActions.AddProductToCartRequest;
    constructor(public payload: number) {}
}

export class AddProductToCart implements Action {
    readonly type = ECartPageActions.AddProductToCart;
    constructor(public payload: ProductModel) {}
}

export type CartPageActions = GetCartProductListRequest | SetCartProductList | AddProductToCartRequest | AddProductToCart;