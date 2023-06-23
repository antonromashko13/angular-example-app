import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailPageSmartComponent} from "./product-detail-page.smart.component";
import {ProductDetailPagePresentationComponent} from "./product-detail-page.presentation.component";
import {ProductDetailPageRoutingModule} from "./product-detail-page.routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        ProductDetailPageSmartComponent,
        ProductDetailPagePresentationComponent,
    ],
    imports: [
        CommonModule,
        ProductDetailPageRoutingModule,

        MatIconModule,
        MatButtonModule
    ]
})
export class ProductDetailPageModule { }