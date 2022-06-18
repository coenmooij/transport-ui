import { Component, Input } from '@angular/core';

@Component({
    selector: 'tp-brand',
    templateUrl: 'brand.component.html',
})
export class BrandComponent {
    @Input() public brand?: string;
    @Input() public imageUrl?: string;
}
