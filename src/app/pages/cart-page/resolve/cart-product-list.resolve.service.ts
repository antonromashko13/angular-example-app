import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppStateModel} from "../../../state-management/app.state";
import {selectCartProductList} from "../state-management/cart-page.selector";
import {GetCartProductListRequest} from "../state-management/cart-page.actions";
import {ProductModel} from "../../../shared/models/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartProductListResolveService implements Resolve<ProductModel[]> {
    cartProductList$!: Observable<ProductModel[]>

    constructor(private store: Store<AppStateModel>) {
        this.cartProductList$ = this.store.pipe(select(selectCartProductList))
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel[]> {
        this.store.dispatch(new GetCartProductListRequest());
        return this.cartProductList$;
    }
}