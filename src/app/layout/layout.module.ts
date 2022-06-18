import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayout } from './page';

const LAYOUTS = [PageLayout];

@NgModule({
    imports: [RouterModule],
    declarations: LAYOUTS,
    exports: LAYOUTS,
})
export class LayoutModule {}
