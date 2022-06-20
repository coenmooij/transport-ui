import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, PageLayout } from '../layout';
import { HomePage, PagesModule, SignUpPage } from '../pages';

const routes: Routes = [
    {
        path: '',
        component: PageLayout,
        children: [
            { path: '', pathMatch: 'full', component: HomePage },
            { path: 'sign-up', component: SignUpPage },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule],
})
export class RoutingModule {}
