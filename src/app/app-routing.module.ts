import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {SingleAppComponentComponent} from './single-app-component/single-app-component.component'

export const routes: Routes = [
	{path :'apps/:package',component:SingleAppComponentComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes,{ enableTracing: true })]
// })
// export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
