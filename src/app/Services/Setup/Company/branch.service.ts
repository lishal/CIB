import { Injectable,Inject } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { CIB_BASE_URL } from 'src/app/app-config.module';
import { HttpClient, HttpHeaders ,HttpResponse} from '@angular/common/http';

export interface OdataResponse{
  value:any[]
}

export interface postBranch{
  createdOn: string;
  updatedOn: string;
  createdBy: string;
  updatedBy: string;
  dpbranchid: string;
  prevdpbranchid: string;
  branchName: string;
  branchAddress: string;
  phoneNo: string;
  branchNameNp: string;
  bmemailId: string;
  idDistrict: string;
  performanceCutOff: number;
  enableKsklinquiryViaAccountMonitoring: boolean;
  enableKsklinquiryViaStockInspection: boolean;
  enableKsklinquiryViaPendingDocument: boolean;
  enableKsklinquiryViaInsurance: boolean;
  isActive: boolean;
}
export interface request{
  first: number,
  rows: number,
  sortField:string | string[],
  sortOrder:number,
  filterRequest:any[]
}
@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private httpClient:HttpClient, @Inject(CIB_BASE_URL) private baseUrl:string) {}
  
  getBranchData(request:request): Observable<{ count: number, value: any[] }> {
    const {first,rows,sortField, sortOrder,filterRequest}=request
    let urlParams=`&skip=${first}&top=${rows}`;
    filterRequest.forEach((items,index)=>{
        switch (items.mode) {
          case 'reset':
            filterRequest.splice(index, 1);
            break;
          case 'equal':
            if(items.fieldName!='CUTOFF'){
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} eq '${items.value}')`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} eq '${items.value}')`
              }
            }
            else{
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} eq ${items.value})`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} eq ${items.value})`
              }
            }
              
            break;
          case 'notEqual':
            if(items.fieldName!='CUTOFF'){
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} ne '${items.value}')`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} ne '${items.value}')`
              }
            }
            else{
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} ne ${items.value})`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} ne ${items.value})`
              }
            }
            break;
          case 'greater':
            if(items.fieldName!='CUTOFF'){
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} gt '${items.value}')`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} gt '${items.value}')`
              }
            }
            else{
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} gt ${items.value})`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} gt ${items.value})`
              }
            }
            break;
          case 'greaterEqual':
            if(items.fieldName!='CUTOFF'){
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} ge '${items.value}')`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} ge '${items.value}')`
              }
            }
            else{
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} ge ${items.value})`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} ge ${items.value})`
              }
            }
            break;
          case 'less':
            if(items.fieldName!='CUTOFF'){
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} lt '${items.value}')`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} lt '${items.value}')`
              }
            }
            else{
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} lt ${items.value})`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} lt ${items.value})`
              }
            }
            break;
          case 'lessEqual':
            if(items.fieldName!='CUTOFF'){
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} le '${items.value}'))`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} le '${items.value}')`
              }
            }
            else{
              if (urlParams.includes('$filter')) {
                urlParams+=` AND (${items.fieldName} le ${items.value}))`
              }
              else{
                urlParams+=`&$filter=(${items.fieldName} le ${items.value})`
              }
            }
            break;
          case 'startsWith':
              if (urlParams.includes('$filter')) {
                urlParams+=` AND startswith(${items.fieldName}, '${items.value}')`
              }
              else{
                urlParams+=`&$filter=startswith(${items.fieldName}, '${items.value}')`
              }
            break;
          case 'endsWith':
              if (urlParams.includes('$filter')) {
                urlParams+=` AND endswith(${items.fieldName}, '${items.value}')`
              }
              else{
                urlParams+=`&$filter=endswith(${items.fieldName}, '${items.value}')`
              }
            break;
          case 'contains':
              if (urlParams.includes('$filter')) {
                urlParams+=` AND contains(${items.fieldName}, '${items.value}')`
              }
              else{
                urlParams+=`&$filter=contains(${items.fieldName}, '${items.value}')`
              }
            break;
        }
      })
   
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

  postBranchData(data:postBranch):Observable<HttpResponse<any>>{ 
    return this.httpClient.post<OdataResponse>(`${this.baseUrl}/branch`,data, { observe: 'response' });
  }
  public viewData(id:string):Observable<OdataResponse>{
    return this.httpClient.get<{value:any[]}>(`${this.baseUrl}/branch/${id}`);
  }
 
  public getClusterData():Observable<OdataResponse>{
    return this.httpClient.get<{value:any[]}>(`${this.baseUrl}/dropdown/GetClusterProvinceDistrict`);
  }
}
