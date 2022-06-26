import {
    AfterContentChecked,
    AfterContentInit,
    Component,
    ContentChild,
    ContentChildren,
    Input,
    QueryList,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputErrorComponent } from '../input-error';
import { LabelComponent } from '../label';
import { PasswordInputComponent } from '../password-input';
import { TextInputComponent } from '../text-input';

@Component({
    selector: 'tp-field[name]',
    templateUrl: 'field.component.html',
    styleUrls: ['field.component.scss'],
})
export class FieldComponent implements AfterContentInit, AfterContentChecked {
    @ContentChildren(InputErrorComponent) public errors!: QueryList<InputErrorComponent>;
    @ContentChild(LabelComponent) public label?: LabelComponent;
    @ContentChild(TextInputComponent) public textInput?: TextInputComponent;
    @ContentChild(PasswordInputComponent) public passwordInput?: PasswordInputComponent;

    @Input() public name!: string;
    @Input() public control?: AbstractControl;

    public ngAfterContentInit(): void {
        if (this.label) {
            this.label.field = this.name;
        }
        if (this.textInput) {
            this.textInput.field = this.name;
        }
        if (this.passwordInput) {
            this.passwordInput.field = this.name;
        }
    }

    public ngAfterContentChecked(): void {
        const hasError = this.errors.length > 0;
        if (this.textInput) {
            this.textInput.hasError = hasError;
        }
        if (this.passwordInput) {
            this.passwordInput.hasError = hasError;
        }
    }
}
