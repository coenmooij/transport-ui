import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

const LOWERCASE_REGEX = /[a-z]/;

@Directive({
    selector: '[tpLowercaseValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LowercaseValidator, multi: true }],
})
export class LowercaseValidator implements Validator {
    public validate(control: AbstractControl): ValidationErrors | null {
        return LOWERCASE_REGEX.test(control.value) ? null : { lowercase: true };
    }
}
