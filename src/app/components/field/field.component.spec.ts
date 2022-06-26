import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '../icon';
import { InputErrorModule } from '../input-error';
import { InputHintModule } from '../input-hint';
import { LabelModule } from '../label';
import { PasswordInputModule } from '../password-input';
import { TextInputModule } from '../text-input';
import { FieldComponent } from './field.component';

@Component({ templateUrl: 'field.component.spec.html' })
class StubFieldComponent {
    @ViewChild(FieldComponent) public field!: FieldComponent;

    public showError: boolean = false;
}

describe('StubFieldComponent', () => {
    let component: StubFieldComponent;
    let fixture: ComponentFixture<StubFieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                IconModule,
                CommonModule,
                LabelModule,
                TextInputModule,
                PasswordInputModule,
                InputHintModule,
                InputErrorModule,
            ],
            declarations: [StubFieldComponent, FieldComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StubFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should propagate name', () => {
        expect(component.field.label?.field).toBe('test-name');
        expect(component.field.textInput?.field).toBe('test-name');
        expect(component.field.passwordInput?.field).toBe('test-name');
    });

    it('should propagate error when projected', () => {
        component.showError = true;
        fixture.detectChanges();

        expect(component.field.textInput?.hasError).toBeTrue();
        expect(component.field.passwordInput?.hasError).toBeTrue();
    });
});

describe('FieldComponent', () => {
    let component: FieldComponent;
    let fixture: ComponentFixture<FieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FieldComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;
        component.name = 'test-field';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
