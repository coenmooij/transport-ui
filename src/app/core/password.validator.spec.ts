import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({ templateUrl: 'password.validator.spec.html' })
class StubPasswordValidator {
    public form: FormGroup = new FormGroup(
        {
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            password: new FormControl(''),
        },
        [PasswordValidator.nameInPassword()]
    );
}

describe('Password Validator', () => {
    let stub: StubPasswordValidator;
    let fixture: ComponentFixture<StubPasswordValidator>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [StubPasswordValidator],
        }).compileComponents();

        fixture = TestBed.createComponent(StubPasswordValidator);
        stub = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should not allow firstName', () => {
        const firstNameInput = fixture.nativeElement.querySelector('input[name=first-name]');
        firstNameInput.value = 'John';
        firstNameInput.dispatchEvent(new Event('input'));

        const passwordInput = fixture.nativeElement.querySelector('input[name=password]');
        passwordInput.value = 'testJohnabc';
        passwordInput.dispatchEvent(new Event('input'));

        expect(stub.form.invalid).toBeTrue();
    });

    it('should not allow lastName', () => {
        const lastNameInput = fixture.nativeElement.querySelector('input[name=last-name]');
        lastNameInput.value = 'Pete';
        lastNameInput.dispatchEvent(new Event('input'));

        const passwordInput = fixture.nativeElement.querySelector('input[name=password]');
        passwordInput.value = 'testPeteabc';
        passwordInput.dispatchEvent(new Event('input'));

        expect(stub.form.invalid).toBeTrue();
    });

    it('should ignore empty password', () => {
        expect(stub.form.valid).toBeTrue();
    });

    it('should just work with no overlapping names', () => {
        const firstNameInput = fixture.nativeElement.querySelector('input[name=first-name]');
        firstNameInput.value = 'John';
        firstNameInput.dispatchEvent(new Event('input'));

        const lastNameInput = fixture.nativeElement.querySelector('input[name=last-name]');
        lastNameInput.value = 'Doe';
        lastNameInput.dispatchEvent(new Event('input'));

        const passwordInput = fixture.nativeElement.querySelector('input[name=password]');
        passwordInput.value = 'Secret';
        passwordInput.dispatchEvent(new Event('input'));

        expect(stub.form.valid).toBeTrue();
    });
});
