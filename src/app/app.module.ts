import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./state-management/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {ProductListPageEffects} from "./pages/product-list-page/state-management/product-list-page.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ProductDetailPageEffects} from "./pages/product-detail-page/state-management/product-detail-page.effects";
import {CartPageEffects} from "./pages/cart-page/state-management/cart-page.effects";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([ProductListPageEffects, ProductDetailPageEffects, CartPageEffects]),
        StoreDevtoolsModule.instrument(),
        SharedModule,
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [
        {provide: API_BASE_URL, useValue: 'http://localhost:3000'},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
