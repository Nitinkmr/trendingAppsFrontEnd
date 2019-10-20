import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SingleAppComponentComponent } from './single-app-component/single-app-component.component';
import { HttpClientModule } from '@angular/common/http'; 
import { NgGridModule } from 'angular2-grid';
// import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SingleAppComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgGridModule,
    NgxHmCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
