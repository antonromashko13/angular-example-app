import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";
import {catchError, EMPTY} from 'rxjs'
import {
    GetProductListRequest,
    SetProductList,
    EProductListPageActions,
    GetProductTypesRequest,
    SetProductTypes,
} from "./product-list-page.actions";
import {ApiProductService} from "../../../shared/services/api-product.service";

@Injectable()
export class ProductListPageEffects {
    getProductListRequest$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType<GetProductListRequest>(EProductListPageActions.GetProductListRequest),
            switchMap((actionData: any) => {
                return this.apiProductService.getProductList(actionData.payload).pipe(
                    map(responseData => new SetProductList(responseData)),
                    catchError(() => EMPTY)
                )
            })
        )
    })

    getProductTypesRequest$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType<GetProductTypesRequest>(EProductListPageActions.GetProductTypesRequest),
            switchMap(() => {
                return this.apiProductService.getProductTypes().pipe(
                    map(responseData => new SetProductTypes(responseData)),
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