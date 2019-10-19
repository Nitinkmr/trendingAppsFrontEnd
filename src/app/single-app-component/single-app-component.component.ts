import { Component, OnInit,Input } from '@angular/core';
import {AppService} from '../services/app.services';
@Component({
  selector: 'app-single-app-component',
  templateUrl: './single-app-component.component.html',
  styleUrls: ['./single-app-component.component.scss']
})
export class SingleAppComponentComponent implements OnInit {
	
	@Input() model;
  	constructor(private appService:AppService) { }

  ngOnInit() {
  	console.log("second component");
  	this.appService.getApp("");
  }

}
