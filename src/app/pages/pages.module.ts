import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    ButtonModule,
    CardModule,
    FieldGroupModule,
    FieldModule,
    LabelModule,
    PasswordInputModule,
    TextInputModule,
    TitleModule,
} from '../components';
import { HomePage } from './home';
import { SignUpPage } from './sign-up';

const PAGES = [HomePage, SignUpPage];

@NgModule({
    declarations: PAGES,
    exports: PAGES,
    imports: [
        RouterModule,
        TitleModule,
        CardModule,
        ReactiveFormsModule,
        ButtonModule,
        FieldModule,
        LabelModule,
        TextInputModule,
        PasswordInputModule,
        FieldGroupModule,
    ],
})
export class PagesModule {}
