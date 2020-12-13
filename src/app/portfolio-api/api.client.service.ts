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

  post<T>(url: string, data: any): Observable<T> {
    console.log(`Post call for ${url}.`);
    const jsonData = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<T>(url, jsonData, httpOptions);
  }
}
