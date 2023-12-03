import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CIB_BASE_URL } from 'src/app/app-config.module';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Role } from 'src/app/models/RoleModel';

// export interface OdataResponse{
//   value:any[]
// }
// To make Generic

export interface OdataResponse <T>{
  value: T[]
}
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private httpClient:HttpClient, @Inject(CIB_BASE_URL) private baseUrl:string) {}
  
  public getRoleData():Observable<OdataResponse<Role>>{
    return this.httpClient.get<OdataResponse<Role>>(`${this.baseUrl}/role/GetAll?`);
  }
  public addRoleData(data:any):Observable<OdataResponse<Role>>{ 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<OdataResponse<Role>>(`${this.baseUrl}/role`,data,{headers});
  }
  public updateRoleData(data:any):Observable<OdataResponse<Role>>{ 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.put<OdataResponse<Role>>(`${this.baseUrl}/role/${data.id}`,data);
  }
  public deleteRoleData(data:any):Observable<OdataResponse<Role>>{ 
    return this.httpClient.delete<OdataResponse<Role>>(`${this.baseUrl}/role/${data.Id}`);
  }
}