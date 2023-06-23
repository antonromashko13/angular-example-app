import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";
import {catchError, EMPTY} from 'rxjs'
import {ApiProductService} from "../../../shared/services/api-product.service";
import {EProductDetailPageActions, GetProductRequest, SetProduct} from "./product-detail-page.actions";

@Injectable()
export class ProductDetailPageEffects {
    getProductRequest$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType<GetProductRequest>(EProductDetailPageActions.GetProductRequest),
            switchMap((actionData: any) => {
                return this.apiProductService.getProduct(actionData.payload).pipe(
                    map(responseData => new SetProduct(responseData)),
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