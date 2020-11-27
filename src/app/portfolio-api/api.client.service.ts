import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    console.log(`Get call for ${url}`);
    return this.http.get<T>(url);
  }
}
