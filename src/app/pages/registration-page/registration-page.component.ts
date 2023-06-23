import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {LoginRegisterRequestModel} from "../../shared/models/login-register-request.model";
import {catchError, EMPTY} from "rxjs";

@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
    registrationError?: string;

    constructor(private authService: AuthService,
                private router: Router) { }

    registration({ email, password }: LoginRegisterRequestModel): void {
        if (email && password) {
            this.authService.register(email, password)
                .pipe(
                    catchError((err) => {
                        this.registrationError = err.error;
                        return EMPTY;
                    })
                )
                .subscribe(() => {
                    if(this.authService.isLoggedIn()) {
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