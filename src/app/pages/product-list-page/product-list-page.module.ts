import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListPageRoutingModule } from "./product-list-page-routing.module";
import {ProductListPageSmartComponent} from "./product-list-page.smart.component";
import { ProductListPagePresentationComponent } from "./product-list-page.presentation.component";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ProductListPageSmartComponent,
        ProductListPagePresentationComponent,
    ],
    imports: [
        CommonModule,
        ProductListPageRoutingModule,
        MatCardModule,
        MatRadioModule,
        MatInputModule,
        FormsModule
    ]
})
export class ProductListPageModule { }