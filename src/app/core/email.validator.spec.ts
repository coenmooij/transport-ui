import { TestBed } from '@angular/core/testing';
import { AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailValidator } from './email.validator';

describe('EmailValidator', () => {
    let emailValidator: EmailValidator;

    beforeEach(async () => {
        await TestBed.configureTestingModule({}).compileComponents();

        emailValidator = TestBed.inject(EmailValidator);
    });

    it('should handle valid email', (done: DoneFn) => {
        const validatorFn: AsyncValidatorFn = emailValidator.validate();
        const control: FormControl = new FormControl<string>('valid@transport.app');

        const validator: Observable<ValidationErrors | null> = <Observable<ValidationErrors | null>>(
            validatorFn(control)
        );

        validator.subscribe({
            next: (response: ValidationErrors | null) => {
                expect(response).toBeNull();
                done();
            },
        });
    });
    it('should handle invalid email', (done: DoneFn) => {
        const validatorFn: AsyncValidatorFn = emailValidator.validate();
        const control: FormControl = new FormControl<string>('invalid@invalid.test');

        const validator: Observable<ValidationErrors | null> = <Observable<ValidationErrors | null>>(
            validatorFn(control)
        );

        validator.subscribe({
            next: (response: ValidationErrors | null) => {
                expect(response).toEqual({ disallowedDomain: true });
                done();
            },
        });
    });
});
