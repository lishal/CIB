import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  constructor(private http:HttpClient) { }

  fetchData():Observable<any>{
    const apiUrl='https://random-data-api.com/api/v2/banks/';
    return this.http.get(apiUrl);
  }

}
