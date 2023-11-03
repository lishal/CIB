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
export class PermissionEmployeeService {

  constructor(private httpClient:HttpClient, @Inject(CIB_BASE_URL) private baseUrl:string) {}
  
  public getEmployeeData():Observable<OdataResponse>{ // If Generic: <OdataResponse<ModleName>> ex: <OdataResponse <PermissionEmployee>>
    return this.httpClient.get<{value:any[]}>(`${this.baseUrl}/Products`); //If Generic: value : PermissionEmployee[]
  }
}