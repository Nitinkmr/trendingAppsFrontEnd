import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.services';
import AppModel from './models/apps.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'trendingApps-frontEnd';
  public show:boolean = true;
  selectedApp : any;
  appList : AppModel[];
  tempAppList:AppModel[];

  constructor(private appService : AppService,private router: Router){
    this.selectedApp = new AppModel();
   }
  
  
  ngOnInit(): void {
    this.appService.getApps().subscribe(response => {    
    
    
      this.appList = response.data;
     
      for (var i = 0; i < this.appList.length; i++)
      {
          var name = this.appList[i].name;
          if(name.length > 20)
            name = name .substr(0,20) + "....";
          
          this.appList[i].config = { draggable:false,sizex: 1, sizey: 1 ,col: Math.floor((i)%5)+1, 
                                       row: Math.floor((i)/5)};
          this.appList[i].name = name;
      }
    
    
   });

   
  }

  onItemClick(event,app):void{
   // this.show = !this.show;
    console.log(app);
    this.tempAppList = this.appList;
    this.selectedApp = app;
    this.router.navigateByUrl('/apps/' + app.package);

  }
}


