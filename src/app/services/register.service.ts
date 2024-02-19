import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/register";

  register(userinfo):Observable<any[]>{
    return this.http.post<any[]>(this.url,userinfo)
  }
}
