import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }
  url = "https://peaceful-basin-92166.herokuapp.com/apps";
  //url = "http://localhost:8080/apps";
  getData () 
  {   
    console.log(this.url);
     return this.http.get(this.url);     
  }

  getApp(packageName)
  {
  	return this.http.get(this.url + "/"+packageName);
  }

  refresh()
  {
  	
    try
      {
        return this.http.get(this.url + "/scrape");
      }catch(e)
      {
        console.log("error");
      }
  }

  
}
