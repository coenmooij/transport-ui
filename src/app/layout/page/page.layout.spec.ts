import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrandModule, ButtonModule, FooterModule, HeaderModule, IconModule, PageModule } from '../../components';
import { PageLayout } from './page.layout';

describe('PageLayout', () => {
    let component: PageLayout;
    let fixture: ComponentFixture<PageLayout>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrandModule,
                HeaderModule,
                PageModule,
                FooterModule,
                ButtonModule,
                IconModule,
            ],
            declarations: [PageLayout],
        }).compileComponents();

        fixture = TestBed.createComponent(PageLayout);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
