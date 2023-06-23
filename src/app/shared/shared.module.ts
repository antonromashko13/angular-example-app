import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from "@angular/router";
import {LoginRegisterFormComponent} from "./components/login-register-form/login-register-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        NavigationComponent,
        LoginRegisterFormComponent
    ],
    exports: [
        NavigationComponent,
        LoginRegisterFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class SharedModule {
}