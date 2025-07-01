import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    console.log(environment.apiurl)
  }
  baseurl: any = environment.apiurl
  // getData(): Observable<any> {
  //   return this.http.get(`${this.baseurl}`);
  // }

  postData(body: any): Observable<any> {
    return this.http.post(`${this.baseurl}`, body);
  }


}
