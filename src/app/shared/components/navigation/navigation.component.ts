import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import {AuthService} from "../../../auth/auth.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    currentUrl: string = '/';

    constructor(private router: Router,
                private authService: AuthService) {
        router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e) => { this.currentUrl = (e as NavigationEnd).urlAfterRedirects; });
    }

    isLoggedOut(): boolean {
        return this.authService.isLoggedOut();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/'])
    }
}