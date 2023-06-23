import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ProductModel} from "../../../shared/models/product.model";
import {AppStateModel} from "../../../state-management/app.state";

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {selectProduct} from "../state-management/product-detail-page.selector";
import {GetProductRequest} from "../state-management/product-detail-page.actions";

@Injectable({
    providedIn: 'root'
})
export class ProductResolveService implements Resolve<ProductModel | null> {
    product$: Observable<ProductModel | null>

    constructor(private store: Store<AppStateModel>) {
        this.product$ = this.store.pipe(select(selectProduct))
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel | null> {
        const productId = Number(route.paramMap.get('productId'));
        this.store.dispatch(new GetProductRequest(productId))
        return this.product$;
    }
}