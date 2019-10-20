import { Component, OnInit,Input,ChangeDetectorRef  } from '@angular/core';
import {AppModel} from '../models/AppModel';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-single-app-component',
  templateUrl: './single-app-component.component.html',
  styleUrls: ['./single-app-component.component.scss']
})
export class SingleAppComponentComponent implements OnInit {

	app = null;
	visible = false;
	imageObject = [];
  constructor(private dataService : DataServiceService,private cdr: ChangeDetectorRef) {
	
	      var packageName = window.location.href.split("/")[4];
	      this.dataService.getApp(packageName).subscribe( response =>{
	      	this.app = response['data'][0];
	        console.log(response);
	        this.visible = true;
	        
	        for(var imgNo in this.app.screenShotUrls)
	        {
	        	this.imageObject.push({'url':this.app.screenShotUrls[imgNo],alt: 'alt of image',
        title: 'title of image'});
	        }
	       console.log(this.imageObject);
	         this.cdr.markForCheck();
	      });
    }

  ngOnInit() {

	      // var packageName = window.location.href.split("/")[4];
	      // this.dataService.getApp(packageName).subscribe( response =>{
	      // 	this.app = response['data'][0];
	      // 	this.visible = true;
	      //   console.log(response);
	      // });
  }


}
