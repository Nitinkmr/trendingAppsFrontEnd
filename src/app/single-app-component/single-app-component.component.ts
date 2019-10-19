import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../services/app.services';
@Component({
  selector: 'app-single-app-component',
  templateUrl: './single-app-component.component.html',
  styleUrls: ['./single-app-component.component.scss']
})
export class SingleAppComponentComponent implements OnInit {
	
	@Input() model;
  	constructor(private appService:AppService,private router: Router) { }

  ngOnInit() {
  	var packageName = window.location.href.split("/");
  	packageName = packageName[4];
  	var app = this.appService.getApp(packageName).subscribe( response =>{
  		console.log(response);
  	});
  	
  }

}
