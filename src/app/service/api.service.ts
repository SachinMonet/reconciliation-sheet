import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
islogin = new Subject()
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
