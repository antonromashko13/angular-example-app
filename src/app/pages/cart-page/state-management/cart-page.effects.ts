import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";
import {catchError, EMPTY} from 'rxjs'
import {ApiProductService} from "../../../shared/services/api-product.service";
import {
    AddProductToCart,
    AddProductToCartRequest,
    ECartPageActions,
    GetCartProductListRequest,
    SetCartProductList
} from "./cart-page.actions";
import {ProductModel} from "../../../shared/models/product.model";

@Injectable()
export class CartPageEffects {
    getCartProductListRequest$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType<GetCartProductListRequest>(ECartPageActions.GetCartProductListRequest),
            switchMap(() => {
                return this.apiProductService.getUserProducts().pipe(
                    map(responseData => new SetCartProductList(responseData as ProductModel[])),
                    catchError(() => EMPTY)
                )
            })
        )
    })

    addProductToCartRequest$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType<AddProductToCartRequest>(ECartPageActions.AddProductToCartRequest),
            switchMap((actionData) => {
                return this.apiProductService.addProductToCart(actionData.payload as number)
                    .pipe(
                    map(responseData => new AddProductToCart(responseData as ProductModel)),
                    catchError(() => EMPTY)
                )
            })
        )
    })

    constructor(
        private apiProductService: ApiProductService,
        private actions$: Actions,
    ) {}
}