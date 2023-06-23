import { Injectable } from '@angular/core';
import {ProductTypeModel} from "../../../shared/models/product-type.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppStateModel} from "../../../state-management/app.state";
import {selectProductTypes} from "../state-management/product-list-page.selector";
import {GetProductTypesRequest} from "../state-management/product-list-page.actions";

@Injectable({
    providedIn: 'root'
})
export class ProductTypesResolveService implements Resolve<ProductTypeModel[]> {
    productTypes$: Observable<ProductTypeModel[]>

    constructor(private store: Store<AppStateModel>) {
        this.productTypes$ = this.store.pipe(select(selectProductTypes))
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductTypeModel[]> {
        this.store.dispatch(new GetProductTypesRequest());
        return this.productTypes$;
    }
}