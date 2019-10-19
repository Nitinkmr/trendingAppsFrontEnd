import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.services';
import AppModel from './models/apps.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'trendingApps-frontEnd';

  constructor(private appService : AppService){
   }

  appList : AppModel[];
  
  ngOnInit(): void {
    console.log("started");
   this.appService.getApps().subscribe(response => {    
     this.appList = response.data;
     
    for (var i = 0; i < this.appList.length; i++)
    {
      var name = this.appList[i].name;
      console.log(name );
      if(name.length > 20)
      {
        name = name .substr(0,20) + "....";
      }
       this.appList[i].config = { sizex: 1, sizey: 1 ,col: Math.floor((i)%5)+1, 
                                   row: Math.floor((i)/5)};
      this.appList[i].name = name;
      // this.appList[i].rows = i/5;
      // this.appList[i].cols = i%5;
    console.log(name +  " " + this.appList[i].config.row + " " + this.appList[i].config.col);
    }

   });

   
  }
}


