import {Action} from "@ngrx/store";
import {ProductModel} from "../../../shared/models/product.model";

export enum EProductDetailPageActions {
    GetProductRequest = '[ProductDetailPage] Get Product',
    SetProduct = '[ProductDetailPage] Set Product',
}

export class GetProductRequest implements Action {
    readonly type = EProductDetailPageActions.GetProductRequest;
    constructor(public payload: number) {}
}

export class SetProduct implements Action {
    readonly type = EProductDetailPageActions.SetProduct;
    constructor(public payload: ProductModel) {}
}

export type ProductDetailPageActions = GetProductRequest | SetProduct;