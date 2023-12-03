import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CIB_BASE_URL } from 'src/app/app-config.module';
import {HttpClient} from '@angular/common/http'

export interface OdataResponse{
  value:any[]
}
// To make Generic

// export interface OdataResponse <T>{
//   value: T[]
// }
@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private httpClient:HttpClient, @Inject(CIB_BASE_URL) private baseUrl:string) {}
  
  public getBranchData():Observable<OdataResponse>{ // If Generic: <OdataResponse<ModleName>> ex: <OdataResponse <Branch>>
    return this.httpClient.get<{value:any[]}>(`${this.baseUrl}/branch/GetAll?`); //If Generic: value : Branch[]
  }
  public getClusterData():Observable<OdataResponse>{
    return this.httpClient.get<{value:any[]}>(`${this.baseUrl}/dropdown/GetClusterProvinceDistrict`);
  }
}
