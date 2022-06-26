import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandComponent } from './brand.component';

describe('BrandComponent', () => {
    let component: BrandComponent;
    let fixture: ComponentFixture<BrandComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BrandComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BrandComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should put the brand as alt of the image', () => {
        component.brand = 'test123';
        fixture.detectChanges();

        const image = fixture.nativeElement.querySelector('img');
        expect(image.alt).toContain('test123');
    });
});
