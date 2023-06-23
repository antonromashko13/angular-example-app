import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login-register-form',
    templateUrl: './login-register-form.component.html',
    styleUrls: ['./login-register-form.component.scss']
})
export class LoginRegisterFormComponent {
    @Input()
    questionText!: string;

    @Input()
    link!: string;

    @Input()
    linkText!: string;

    @Input()
    formTitle: string;

    @Input()
    serverErrorMessage?: string;

    @Output('onLoginOrRegistration')
    onLoginOrRegistrationEmitter = new EventEmitter();

    form : FormGroup = new FormGroup({});

    constructor() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        })
        this.formTitle = 'default';
    }

    submit(): void {
        const email = this.form.get('email')?.value;
        const password = this.form.get('password')?.value;

        this.onLoginOrRegistrationEmitter.emit({ email, password });
    }
}