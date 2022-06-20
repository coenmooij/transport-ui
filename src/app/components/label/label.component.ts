import { Component, Input } from '@angular/core';

@Component({
    selector: 'tp-label',
    templateUrl: 'label.component.html',
    styleUrls: ['label.component.scss'],
})
export class LabelComponent {
    @Input() public field?: string;
}
