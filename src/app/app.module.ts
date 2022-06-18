import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RoutingModule, RouterModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
