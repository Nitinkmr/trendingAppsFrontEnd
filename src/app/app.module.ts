import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
//import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.services';
import { NgGridModule } from 'angular2-grid';
import { SingleAppComponentComponent } from './single-app-component/single-app-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleAppComponentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    NgGridModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
