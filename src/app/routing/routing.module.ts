import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, PageLayout } from '../layout';
import { PagesModule, SignUpPage } from '../pages';

const routes: Routes = [
    {
        path: '',
        component: PageLayout,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'sign-up' },
            { path: 'sign-up', component: SignUpPage },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule],
})
export class RoutingModule {}
