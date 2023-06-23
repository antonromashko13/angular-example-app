import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../app.module";
import {Observable, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiBaseUrl: string;

    constructor(@Inject(API_BASE_URL) apiBaseUrl: string,
                private http: HttpClient) {
        this.apiBaseUrl = apiBaseUrl;
    }

    private setSession(token: string, userId: number): void {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId.toString());
    }

    login(email: string, password: string): Observable<any> {
        localStorage.setItem('email', email);
        localStorage.setItem('password:)', password);

        return this.http
            .post<any>(this.apiBaseUrl + '/login/', {email, password})
            .pipe(
                tap((res) => {
                    this.setSession(res.accessToken!, res.user.id);
                })
            )
    }

    register(email: string, password: string): Observable<any> {
        localStorage.setItem('email', email);
        localStorage.setItem('password:)', password);

        return this.http
            .post<any>(this.apiBaseUrl + '/register/', {email, password, goods: []})
            .pipe(
                tap((res) => {
                    this.setSession(res.accessToken!, res.user.id);
                }),
            );
    }

    logout(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        localStorage.removeItem("password:)");
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem("token");
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    getUserId(): string | null {
        return localStorage.getItem("userId") || null;
    }

    getUserEmail(): string | null {
        return localStorage.getItem("email") || null;
    }

    getUserPassword(): string | null {
        return localStorage.getItem("password:)") || null;
    }
}