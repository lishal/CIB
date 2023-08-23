import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    const apiUrl = 'https://random-data-api.com/api/v2/banks/?size=100';
    return this.http.get(apiUrl);
  }
}