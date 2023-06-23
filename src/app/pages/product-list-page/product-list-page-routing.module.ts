import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageSmartComponent } from "./product-list-page.smart.component";
import {ProductListResolveService} from "./resolve/product-list.resolve.service";
import {ProductTypesResolveService} from "./resolve/product-types.resolve.service";

const routes: Routes = [
    {
        path: '',
        component: ProductListPageSmartComponent,
        resolve: {
            productList: ProductListResolveService,
            productTypes: ProductTypesResolveService,
        }
    },
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
export class ProductListPageRoutingModule { }