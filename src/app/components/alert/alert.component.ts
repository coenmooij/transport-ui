import { Component, Input } from '@angular/core';

@Component({
    selector: 'tp-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
    @Input() public type: 'info' | 'warning' | 'error' | 'success' = 'error';
}
