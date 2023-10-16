import { Injectable, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { ODataDataSource } from 'odata-data-source';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit{

  constructor(private http:HttpClient) { }
  dataSource: ODataDataSource|undefined;

  // fetchData():Observable<any>{
  //   const apiUrl='https://random-data-api.com/api/v2/banks/';
  //   return this.http.get(apiUrl);
  // }
  ngOnInit() {
    const resourcePath = 'https://services.odata.org/V4/OData/OData.svc/Products';
    this.dataSource = new ODataDataSource(this.http, resourcePath);
    // console.log(this.dataSource)
    // return this.dataSource;
  }
}
