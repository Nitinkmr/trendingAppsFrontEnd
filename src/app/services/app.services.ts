import AppModel from '../models/apps.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class AppService {

  api_url = 'http://localhost:8080';
  appUrl = `${this.api_url}/apps`;

  constructor(
    private http: HttpClient
  ) { }

  getApps():Observable<any>{
      return this.http.get(this.appUrl);
  }
}