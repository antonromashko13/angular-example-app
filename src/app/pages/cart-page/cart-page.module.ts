import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageRoutingModule } from "./cart-page-routing.module";
import {CartPageSmartComponent} from "./cart-page.smart.component";
import {CartPagePresentationComponent} from "./cart-page.presentation.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    declarations: [
        CartPageSmartComponent,
        CartPagePresentationComponent,
    ],
    imports: [
        CommonModule,
        CartPageRoutingModule,
        MatCardModule,
    ]
})
export class CartPageModule { }