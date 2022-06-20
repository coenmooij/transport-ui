import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { LabelComponent } from '../label';
import { PasswordInputComponent } from '../password-input';
import { TextInputComponent } from '../text-input';

@Component({
    selector: 'tp-field[name]',
    templateUrl: 'field.component.html',
    styleUrls: ['field.component.scss'],
})
export class FieldComponent implements AfterContentInit {
    @ContentChild(LabelComponent) public label!: LabelComponent;
    @ContentChild(TextInputComponent) public textInput?: TextInputComponent;
    @ContentChild(PasswordInputComponent) public passwordInput?: PasswordInputComponent;

    @Input() public name!: string;

    public ngAfterContentInit(): void {
        this.label.field = this.name;
        if (this.textInput) {
            this.textInput.field = this.name;
        }
        if (this.passwordInput) {
            this.passwordInput.field = this.name;
        }
    }
}
