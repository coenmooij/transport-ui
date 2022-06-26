import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandModule, ButtonModule, FooterModule, HeaderModule, IconModule, PageModule } from '../components';
import { PageLayout } from './page';

const LAYOUTS = [PageLayout];

@NgModule({
    imports: [RouterModule, BrandModule, HeaderModule, PageModule, FooterModule, ButtonModule, IconModule],
    declarations: [LAYOUTS],
    exports: [LAYOUTS],
})
export class LayoutModule {}
