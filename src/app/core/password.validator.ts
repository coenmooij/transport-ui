import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
    public static nameInPassword(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const firstName: string = control.value.firstName;
            const lastName: string = control.value.lastName;
            const password: string = control.value.password;
            if (!password) {
                return null;
            }
            if ((firstName && password.includes(firstName)) || (lastName && password.includes(lastName))) {
                return { nameInPassword: true };
            }

            return null;
        };
    }
}
