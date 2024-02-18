import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/users";
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}
