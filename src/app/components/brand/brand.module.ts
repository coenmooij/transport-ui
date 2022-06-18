import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandComponent } from './brand.component';

@NgModule({
    imports: [RouterModule],
    declarations: [BrandComponent],
    exports: [BrandComponent],
})
export class BrandModule {}
