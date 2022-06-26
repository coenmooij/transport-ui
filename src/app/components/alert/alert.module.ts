import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon';
import { AlertComponent } from './alert.component';

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [AlertComponent],
    exports: [AlertComponent],
})
export class AlertModule {}
