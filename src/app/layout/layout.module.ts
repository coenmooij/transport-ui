import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandModule, FooterModule, HeaderModule, PageModule } from '../components';
import { PageLayout } from './page';

const LAYOUTS = [PageLayout];

@NgModule({
    imports: [RouterModule, BrandModule, HeaderModule, PageModule, FooterModule],
    declarations: [LAYOUTS],
    exports: [LAYOUTS],
})
export class LayoutModule {}
