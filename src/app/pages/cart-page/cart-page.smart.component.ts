import { Component } from '@angular/core';
import { Observable } from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppStateModel} from "../../state-management/app.state";
import {selectCartProductList} from "./state-management/cart-page.selector";
import {ProductModel} from "../../shared/models/product.model";

@Component({
    selector: 'app-cart-page-smart',
    template: `<app-cart-page-presentation [cartProductsList]="(cartProductsList$ | async) || []"></app-cart-page-presentation>`,
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageSmartComponent {
    cartProductsList$!: Observable<ProductModel[]>;

    constructor(private store: Store<AppStateModel>) { }

    ngOnInit() {
        this.cartProductsList$ = this.store.pipe(select(selectCartProductList));
    }

}