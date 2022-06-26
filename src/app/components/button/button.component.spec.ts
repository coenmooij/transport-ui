import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should handle click event', () => {
        spyOn(component.buttonClick, 'emit');

        fixture.nativeElement.querySelector('button').click();
        expect(component.buttonClick.emit).toHaveBeenCalled();
    });
    it('should not emit click when disabled', () => {
        spyOn(component.buttonClick, 'emit');

        component.isDisabled = true;
        fixture.detectChanges();

        fixture.nativeElement.querySelector('button').click();
        expect(component.buttonClick.emit).not.toHaveBeenCalled();
    });
});
