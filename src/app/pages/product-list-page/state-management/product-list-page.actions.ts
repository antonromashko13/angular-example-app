import {Action} from "@ngrx/store";
import {ProductModel} from "../../../shared/models/product.model";
import {ProductTypeModel} from "../../../shared/models/product-type.model";

export enum EProductListPageActions {
    GetProductListRequest = '[ProductListPage] Get Product list Request',
    SetProductList = '[ProductListPage] Set Product list',
    GetProductTypesRequest = '[ProductListPage] Get Product types Request',
    SetProductTypes = '[ProductListPage] Set Product types',
}

export class GetProductListRequest implements Action {
    readonly type = EProductListPageActions.GetProductListRequest;
    constructor(public payload?: {typeId: number, minPrice: number, maxPrice: number}) {}
}

export class SetProductList implements Action {
    readonly type = EProductListPageActions.SetProductList;
    constructor(public payload: ProductModel[]) {}
}

export class GetProductTypesRequest implements Action {
    readonly type = EProductListPageActions.GetProductTypesRequest;
}

export class SetProductTypes implements Action {
    readonly type = EProductListPageActions.SetProductTypes;
    constructor(public payload: ProductTypeModel[]) {}
}

export type ProductListPageActions = GetProductListRequest | SetProductList | GetProductTypesRequest | SetProductTypes;