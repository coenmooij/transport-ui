import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';

@Component({ templateUrl: 'text-input.component.spec.html' })
class StubTextInputComponent {
    @ViewChild(TextInputComponent) public input!: TextInputComponent;

    public control: FormControl = new FormControl<string>('');
}

describe('StubTextInputComponent', () => {
    let stub: StubTextInputComponent;
    let fixture: ComponentFixture<StubTextInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [StubTextInputComponent, TextInputComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StubTextInputComponent);
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

describe('TextInputComponent', () => {
    let component: TextInputComponent;
    let fixture: ComponentFixture<TextInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TextInputComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TextInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
