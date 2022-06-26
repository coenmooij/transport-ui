import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core.module';

@Component({ templateUrl: 'lowercase.validator.spec.html' })
class StubLowercaseValidator {
    public control: FormControl = new FormControl<string>('');
}

describe('lowercase validator', () => {
    let stub: StubLowercaseValidator;
    let fixture: ComponentFixture<StubLowercaseValidator>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, CoreModule],
            declarations: [StubLowercaseValidator],
        }).compileComponents();

        fixture = TestBed.createComponent(StubLowercaseValidator);
        stub = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should handle valid value', () => {
        stub.control.setValue('lowercase');

        expect(stub.control.errors).toBeNull();
    });

    it('should handle invalid value', () => {
        stub.control.setValue('UPPERCASE');

        expect(stub.control.errors).not.toBeNull();
    });
});
