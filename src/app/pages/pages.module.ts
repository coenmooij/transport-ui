import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    AlertModule,
    ButtonModule,
    CardModule,
    FieldGroupModule,
    FieldModule,
    IconModule,
    InputErrorModule,
    InputHintModule,
    LabelModule,
    PasswordInputModule,
    TextInputModule,
    TitleModule,
} from '../components';
import { CoreModule } from '../core';
import { HomePage } from './home';
import { SignUpPage } from './sign-up';

const PAGES = [HomePage, SignUpPage];

@NgModule({
    imports: [
        CommonModule,
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
        IconModule,
        AlertModule,
        InputErrorModule,
        InputHintModule,
        CoreModule,
    ],
    declarations: PAGES,
    exports: PAGES,
})
export class PagesModule {}
