import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

const LOWERCASE_REGEX = /[A-Z]/;

@Directive({
    selector: '[tpUppercaseValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UppercaseValidator, multi: true }],
})
export class UppercaseValidator implements Validator {
    public validate(control: AbstractControl): ValidationErrors | null {
        return LOWERCASE_REGEX.test(control.value) ? null : { uppercase: true };
    }
}
