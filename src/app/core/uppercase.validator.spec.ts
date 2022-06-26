import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core.module';

@Component({ templateUrl: 'uppercase.validator.spec.html' })
class StubUppercaseValidator {
    public control: FormControl = new FormControl<string>('');
}

describe('uppercase validator', () => {
    let stub: StubUppercaseValidator;
    let fixture: ComponentFixture<StubUppercaseValidator>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, CoreModule],
            declarations: [StubUppercaseValidator],
        }).compileComponents();

        fixture = TestBed.createComponent(StubUppercaseValidator);
        stub = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should handle valid value', () => {
        stub.control.setValue('UPPERCASE');

        expect(stub.control.errors).toBeNull();
    });

    it('should handle invalid value', () => {
        stub.control.setValue('lowercase');

        expect(stub.control.errors).not.toBeNull();
    });
});
