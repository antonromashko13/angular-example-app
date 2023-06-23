import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationPageComponent} from "./registration-page.component";
import {RegistrationPageRoutingModule} from "./registration-page-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        RegistrationPageComponent,
    ],
    imports: [
        CommonModule,
        RegistrationPageRoutingModule,
        SharedModule
    ]
})
export class RegistrationPageModule { }