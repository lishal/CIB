import { Injectable,Inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CIB_BASE_URL } from 'src/app/app-config.module';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface OdataResponse{
  value:any[]
}

export interface request{
  first: number,
  rows: number,
  sortField:string | string[],
  sortOrder:number

}
@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private httpClient:HttpClient, @Inject(CIB_BASE_URL) private baseUrl:string) {}
  
  getBranchData(request:request): Observable<{ count: number, value: any[] }> {
    const {first,rows,sortField, sortOrder}=request
    let urlParams=`&skip=${first}&top=${rows}`;
    if(sortField){
      urlParams+=`&$orderby=${sortField} ${sortOrder === 1?'asc':'desc'}`;
    }
    const apiUrl = `${this.baseUrl}/branch/GetAll/?$count=true${urlParams}`;
    return this.httpClient.get<{ '@odata.count': number, value: any[] }>(apiUrl)
      .pipe(
        map(response => {
          return { count: response['@odata.count'], value: response.value };
        })
      );
  }
 
  public getClusterData():Observable<OdataResponse>{
    return this.httpClient.get<{value:any[]}>(`${this.baseUrl}/dropdown/GetClusterProvinceDistrict`);
  }
}
