import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, SignUpRequest, SignUpResponse } from '../../authentication';
import { EmailValidator, PasswordValidator } from '../../core';

@Component({
    templateUrl: 'sign-up.page.html',
})
export class SignUpPage {
    public form: FormGroup = new FormGroup(
        {
            firstName: new FormControl('', { validators: [Validators.required] }),
            lastName: new FormControl('', { validators: [Validators.required] }),
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
                asyncValidators: [this.emailValidator.validate()],
            }),
            password: new FormControl('', {
                validators: [Validators.required, Validators.minLength(8)],
            }),
        },
        [PasswordValidator.nameInPassword()]
    );

    public state: 'initial' | 'pending' | 'error' | 'success' = 'initial';
    public registrationId?: string;

    constructor(private authenticationService: AuthenticationService, private emailValidator: EmailValidator) {}

    public get firstName(): AbstractControl {
        return <AbstractControl>this.form.get('firstName');
    }

    public get lastName(): AbstractControl {
        return <AbstractControl>this.form.get('lastName');
    }

    public get email(): AbstractControl {
        return <AbstractControl>this.form.get('email');
    }

    public get password(): AbstractControl {
        return <AbstractControl>this.form.get('password');
    }

    public onSubmit(): void {
        const signUpRequest: SignUpRequest = this.form.value;

        this.state = 'pending';
        this.authenticationService.signUp$(signUpRequest).subscribe({
            next: (response: SignUpResponse) => {
                this.registrationId = response._id;
                this.state = 'success';
            },
            error: () => {
                this.state = 'error';
            },
        });
    }
}
