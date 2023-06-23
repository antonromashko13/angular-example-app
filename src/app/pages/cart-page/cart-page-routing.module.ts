import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartPageSmartComponent} from "./cart-page.smart.component";
import {CartProductListResolveService} from "./resolve/cart-product-list.resolve.service";

const routes: Routes = [
    { path: '', component: CartPageSmartComponent, resolve: { cartProductList: CartProductListResolveService } },
    {
        path: 'product-info/:productId',
        loadChildren: () => import('../product-detail-page/product-detail-page.module').then(m => m.ProductDetailPageModule),
        outlet: 'sidebar',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartPageRoutingModule { }