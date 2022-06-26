import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { RoutingModule } from './routing/routing.module';
import { TestpietjeComponent } from './testpietje/testpietje.component';

@NgModule({
    declarations: [AppComponent, TestpietjeComponent],
    imports: [BrowserModule, RoutingModule, RouterModule, CoreModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
