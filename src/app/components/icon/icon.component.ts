import { Component, Input } from '@angular/core';

@Component({
    selector: 'tp-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['icon.component.scss'],
})
export class IconComponent {
    @Input() public icon: string = 'home';
    @Input() public spin: boolean = false;
}
