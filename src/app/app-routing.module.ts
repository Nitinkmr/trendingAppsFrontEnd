import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {SingleAppComponentComponent} from './single-app-component/single-app-component.component';
const routes: Routes = [
	{
		path : '',
   		component: HomeComponentComponent
	},
	{
		path : 'apps/:package',
   		component: SingleAppComponentComponent
	}

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
