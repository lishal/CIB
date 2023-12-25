import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CIB_BASE_URL } from 'src/app/app-config.module';

export interface userRequest {
  first: number;
  rows: number;
  sortField: string | string[];
  sortOrder: number;
  filterRequest: any[];
}
export interface OdataResponse {
  value: any[];
}
export interface postUser {
  createdOn: string;
  updatedOn: string;
  createdBy: string;
  updatedBy: string;
  loginId: string;
  staffCode: string;
  fullName: string;
  emailId: string;
  idhrrole: string;
  idbranch: string;
  idhrdepartment: string;
  accessByBranch: boolean;
  isNewlyAdded: boolean;
  mobileNo: string;
  enableChangeType: boolean;
  allowClusterBranch: boolean;
  allowProvinceBranch: boolean;
  passwordExpiryPeriod: Number;
  isActive: boolean;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CIB_BASE_URL) private baseUrl: string
  ) {}
  getUserData(
    request: userRequest
  ): Observable<{ count: number; value: any[] }> {
    const { first, rows, sortField, sortOrder, filterRequest } = request;
    let urlParams = `&skip=${first}&top=${rows}`;
    if (sortField) {
      urlParams += `&$orderby=${sortField} ${sortOrder === 1 ? 'asc' : 'desc'}`;
    }
    filterRequest.forEach((items, index) => {
      switch (items.mode) {
        case 'reset':
          filterRequest.splice(index, 1);
          break;
        case 'equal':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} eq '${items.value}')`;
          } else {
            urlParams += `&$filter=(${items.fieldName} eq '${items.value}')`;
          }
          break;
        case 'notEqual':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} ne '${items.value}')`;
          } else {
            urlParams += `&$filter=(${items.fieldName} ne '${items.value}')`;
          }

          break;
        case 'greater':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} gt '${items.value}')`;
          } else {
            urlParams += `&$filter=(${items.fieldName} gt '${items.value}')`;
          }

          break;
        case 'greaterEqual':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} ge '${items.value}')`;
          } else {
            urlParams += `&$filter=(${items.fieldName} ge '${items.value}')`;
          }

          break;
        case 'less':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} lt '${items.value}')`;
          } else {
            urlParams += `&$filter=(${items.fieldName} lt '${items.value}')`;
          }

          break;
        case 'lessEqual':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} le '${items.value}'))`;
          } else {
            urlParams += `&$filter=(${items.fieldName} le '${items.value}')`;
          }
          break;
        case 'startsWith':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND startswith(${items.fieldName}, '${items.value}')`;
          } else {
            urlParams += `&$filter=startswith(${items.fieldName}, '${items.value}')`;
          }
          break;
        case 'endsWith':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND endswith(${items.fieldName}, '${items.value}')`;
          } else {
            urlParams += `&$filter=endswith(${items.fieldName}, '${items.value}')`;
          }
          break;
        case 'contains':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND contains(${items.fieldName}, '${items.value}')`;
          } else {
            urlParams += `&$filter=contains(${items.fieldName}, '${items.value}')`;
          }
          break;
        case 'resetBool':
          filterRequest.splice(index, 1);
          break;
        case 'boolTrue':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} eq ${items.value})`;
          } else {
            urlParams += `&$filter=(${items.fieldName} eq ${items.value})`;
          }
          break;
        case 'boolFalse':
          if (urlParams.includes('$filter')) {
            urlParams += ` AND (${items.fieldName} eq ${items.value})`;
          } else {
            urlParams += `&$filter=(${items.fieldName} eq ${items.value})`;
          }
          break;
      }
    });
    const apiUrl = `${this.baseUrl}/user/GetAll/?$count=true${urlParams}`;
    return this.httpClient
      .get<{ '@odata.count': number; value: any[] }>(apiUrl)
      .pipe(
        map((response) => {
          return { count: response['@odata.count'], value: response.value };
        })
      );
  }
  public getUserBranchData(): Observable<OdataResponse> {
    return this.httpClient.get<OdataResponse>(`${this.baseUrl}/branch/GetAll`);
  }
  public getUserDepartmentData(): Observable<OdataResponse> {
    return this.httpClient.get<OdataResponse>(
      `${this.baseUrl}/department/GetAll`
    );
  }
  public getUserRoleData(): Observable<OdataResponse> {
    return this.httpClient.get<OdataResponse>(`${this.baseUrl}/role/GetAll`);
  }
  public postUserData(data: postUser): Observable<HttpResponse<any>> {
    return this.httpClient.post<OdataResponse>(`${this.baseUrl}/user`, data, {
      observe: 'response',
    });
  }
  public editUserData(
    data: postUser,
    id: String
  ): Observable<HttpResponse<any>> {
    return this.httpClient.post<OdataResponse>(
      `${this.baseUrl}/user/${id}`,
      data,
      { observe: 'response' }
    );
  }
  public viewUserData(id: string): Observable<OdataResponse> {
    return this.httpClient.get<{ value: any[] }>(`${this.baseUrl}/user/${id}`);
  }
  public deleteUserData(id: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<{ value: any[] }>(
      `${this.baseUrl}/user/${id}`,
      { observe: 'response' }
    );
  }
}
