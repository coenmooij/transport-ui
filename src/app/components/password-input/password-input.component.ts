import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'tp-password-input',
    templateUrl: 'password-input.component.html',
    styleUrls: ['password-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordInputComponent),
            multi: true,
        },
    ],
})
export class PasswordInputComponent implements ControlValueAccessor {
    @Input() public field?: string;
    @Input() public hasError: boolean = false;

    public value?: string;
    public isDisabled: boolean = false;

    public onChange!: (value: string) => void;
    public onTouched!: () => void;

    public registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    public writeValue(value: string): void {
        this.value = value;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public onValueChange(value: string): void {
        this.writeValue(value);
        this.onChange(value);
        this.onTouched();
    }
}
