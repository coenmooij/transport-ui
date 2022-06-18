import { NgModule } from '@angular/core';
import { SignUpPage } from './sign-up';

const PAGES = [SignUpPage];

@NgModule({
    declarations: PAGES,
    exports: PAGES,
})
export class PagesModule {}
