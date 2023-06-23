import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductResolveService} from "./resolve/product.resolve.service";
import {ProductDetailPageSmartComponent} from "./product-detail-page.smart.component";

const routes: Routes = [
    { path: '', component: ProductDetailPageSmartComponent, resolve: { product: ProductResolveService } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductDetailPageRoutingModule { }