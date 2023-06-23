import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    { path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)},
    { path: 'registration', loadChildren: () => import('./pages/registration-page/registration-page.module').then(m => m.RegistrationPageModule) },
    { path: 'product-list', loadChildren: () => import('./pages/product-list-page/product-list-page.module').then(m => m.ProductListPageModule) },
    { path: 'cart', loadChildren: () => import('./pages/cart-page/cart-page.module').then(m => m.CartPageModule) },
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    { path: '**', loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule) },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }