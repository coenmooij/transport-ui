import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication';
import { SignUpRequest } from '../../authentication/sign-up.request';

@Component({
    templateUrl: 'sign-up.page.html',
})
export class SignUpPage {
    public form: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]), // TODO  ADD validators
    });

    public state: 'initial' | 'pending' | 'error' | 'success' = 'initial';

    constructor(private authenticationService: AuthenticationService) {}

    public onSubmit(): void {
        const signUpRequest: SignUpRequest = this.form.value;

        this.state = 'pending';
        this.authenticationService.signUp$(signUpRequest).subscribe({
            next: () => {
                this.state = 'success';
            },
            error: () => {
                this.state = 'error';
            },
        });
    }
}
