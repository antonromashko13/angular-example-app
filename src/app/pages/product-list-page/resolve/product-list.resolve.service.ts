import { Injectable } from '@angular/core';
import {ProductModel} from "../../../shared/models/product.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppStateModel} from "../../../state-management/app.state";
import {selectProductList} from "../state-management/product-list-page.selector";
import {GetProductListRequest} from "../state-management/product-list-page.actions";

@Injectable({
    providedIn: 'root'
})
export class ProductListResolveService implements Resolve<ProductModel[]> {
    productList$!: Observable<ProductModel[]>

    constructor(private store: Store<AppStateModel>) {
        this.productList$ = this.store.pipe(select(selectProductList))
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel[]> {
        this.store.dispatch(new GetProductListRequest());
        return this.productList$;
    }
}