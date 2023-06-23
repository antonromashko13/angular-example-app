import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../../shared/models/product.model";
import {AuthService} from "../../auth/auth.service";
import {select, Store} from "@ngrx/store";
import {AppStateModel} from "../../state-management/app.state";
import {selectProduct} from "./state-management/product-detail-page.selector";
import {AddProductToCartRequest} from "../cart-page/state-management/cart-page.actions";

@Component({
    selector: 'app-product-detail-page-smart',
    template: `
        <app-product-detail-page-presentation
            [product]="(product$ | async) || null"
            [isLogged]="isLoggedIn()"
            (onAddProductToCartClick)="addProductToCart($event)"
        ></app-product-detail-page-presentation>`,
})
export class ProductDetailPageSmartComponent implements OnInit {
    product$!: Observable<ProductModel | null>;

    constructor(private authService: AuthService,
                private store: Store<AppStateModel>) { }

    ngOnInit() {
        this.product$ = this.store.pipe(select(selectProduct));
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    addProductToCart(productId: number) {
        this.store.dispatch(new AddProductToCartRequest(productId));
    }
}