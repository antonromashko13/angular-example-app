import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {Observable} from "rxjs";
import {ProductTypeModel} from "../../shared/models/product-type.model";
import {select, Store} from "@ngrx/store";
import {AppStateModel} from "../../state-management/app.state";
import {selectProductList, selectProductTypes} from "./state-management/product-list-page.selector";
import {GetProductListRequest} from "./state-management/product-list-page.actions";
import {FiltersModel} from "../../shared/models/filters.model";

@Component({
    selector: 'app-product-list-page-smart',
    template: `
        <app-product-list-page-presentation
                [productTypes]="(productTypes$ | async) || []"
                [productList]="(productList$ | async) || []"
                (onFiltersChange)="getFilteredProductList($event)"
        ></app-product-list-page-presentation>`,
    styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageSmartComponent implements OnInit {
    productList$!: Observable<ProductModel[]>;
    productTypes$!: Observable<ProductTypeModel[]>;

    constructor(private store: Store<AppStateModel>) { }

    ngOnInit() {
        this.productList$ = this.store.pipe(select(selectProductList));
        this.productTypes$ = this.store.pipe(select(selectProductTypes));
    }

    getFilteredProductList(filters: FiltersModel) {
        this.store.dispatch(new GetProductListRequest(filters))
    }
}