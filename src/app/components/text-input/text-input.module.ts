import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';

@NgModule({
    imports: [FormsModule],
    declarations: [TextInputComponent],
    exports: [TextInputComponent],
})
export class TextInputModule {}
