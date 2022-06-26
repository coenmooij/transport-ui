import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '../icon';
import { AlertComponent } from './alert.component';

describe('Alert Component', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IconModule],
            declarations: [AlertComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show an icon', () => {
        component.type = 'success';
        fixture.detectChanges();

        const successIcon = fixture.nativeElement.querySelector('tp-icon[icon=check]');

        expect(successIcon).not.toBeNull();
    });
});
