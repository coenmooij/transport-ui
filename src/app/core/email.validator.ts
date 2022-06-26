import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

const ALLOWED_DOMAIN = 'transport.app';
const FAKE_API_DELAY_IN_MS = 2000;

@Injectable({ providedIn: 'root' })
export class EmailValidator {
    public isValidEmail(email: string): Observable<boolean> {
        const isValid = email.indexOf(ALLOWED_DOMAIN) > -1;

        // This function pretends to be an async back-end validation by creating an observable and using a delay
        return of(isValid).pipe(delay(FAKE_API_DELAY_IN_MS));
    }

    public validate(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return this.isValidEmail(control.value).pipe(
                map((isValid: boolean) => {
                    return isValid ? null : { disallowedDomain: true };
                })
            );
        };
    }
}
