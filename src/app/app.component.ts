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
   this.appService.getApps().subscribe(apps => {
     this.appList = apps;
     console.log(this.appList);
   });
  }

}
