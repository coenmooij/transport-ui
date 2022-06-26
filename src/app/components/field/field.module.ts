import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon';
import { FieldComponent } from './field.component';

@NgModule({
    declarations: [FieldComponent],
    exports: [FieldComponent],
    imports: [IconModule, CommonModule],
})
export class FieldModule {}
