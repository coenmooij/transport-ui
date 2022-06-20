import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'tp-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
})
export class ButtonComponent {
    @Input() public isDisabled: boolean = false;

    @Output() public buttonClick: EventEmitter<void> = new EventEmitter<void>();

    public onClick(): void {
        this.buttonClick.emit();
    }
}
