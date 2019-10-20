import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {AppModel} from '../models/AppModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private dataService : DataServiceService,private http:HttpClient) { }
  appList : AppModel[];

  ngOnInit() {

  	this.dataService.getData().subscribe(response =>{

      this.appList = response['data'];
      for (var i = 0; i < this.appList.length; i++)
      {
          var name = this.appList[i].name;
          if(name.length > 20)
            name = name .substr(0,20) + "....";
          
          this.appList[i].config = { draggable:false,sizex: 1, sizey: 1 ,col: Math.floor((i)%5)+1, 
                                       row: Math.floor((i)/5)};
          this.appList[i].name = name;
      }
  		
  		console.log(this.appList);
  	})
  }


  refresh()
  {
    this.dataService.refresh().subscribe(response =>{
        console.log(response);
    });
  }
}
