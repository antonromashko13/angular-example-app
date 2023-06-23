import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {catchError, EMPTY} from "rxjs";
import {LoginRegisterRequestModel} from "../../shared/models/login-register-request.model";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    loginError?: string

    constructor(private authService: AuthService,
                private router: Router) { }

    login({email, password}: LoginRegisterRequestModel): void {
        if (email && password) {
            this.authService.login(email, password)
                .pipe(
                    catchError((err) => {
                        this.loginError = err.error;
                        return EMPTY;
                    })
                )
                .subscribe(() => {
                    if (this.authService.isLoggedIn()) {
                        this.navigateToProductsPage()
                    }
                })
        }
    }

    navigateToProductsPage(): void {
        const productsPageUrl = '/product-list';
        this.router.navigate([productsPageUrl]);
    }
}