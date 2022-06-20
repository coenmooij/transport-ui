import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordInputComponent } from './password-input.component';

@NgModule({
    imports: [FormsModule],
    declarations: [PasswordInputComponent],
    exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
