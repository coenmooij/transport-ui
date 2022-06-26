import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './password-input.component';

@Component({ templateUrl: 'password-input.component.spec.html' })
class StubPasswordInputComponent {
    @ViewChild(PasswordInputComponent) public input!: PasswordInputComponent;

    public control: FormControl = new FormControl<string>('');
}

describe('StubPasswordInputComponent', () => {
    let stub: StubPasswordInputComponent;
    let fixture: ComponentFixture<StubPasswordInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [StubPasswordInputComponent, PasswordInputComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StubPasswordInputComponent);
        stub = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should handle setValue', () => {
        stub.control.setValue('test123');
        fixture.detectChanges();

        const input = fixture.nativeElement.querySelector('input');
        expect(stub.input.value).toBe('test123');
    });

    it('should handle setDisabled', () => {
        stub.control.disable();

        expect(stub.input.isDisabled).toBeTrue();
    });

    it('should handle input and propagate value', () => {
        const input = fixture.nativeElement.querySelector('input');
        input.value = 'blabla';
        input.dispatchEvent(new Event('input'));
        expect(stub.control.value).toEqual('blabla');
    });
});

describe('PasswordInputComponent', () => {
    let component: PasswordInputComponent;
    let fixture: ComponentFixture<PasswordInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PasswordInputComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PasswordInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
