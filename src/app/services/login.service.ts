import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/login";
  private authStatusSubject = new BehaviorSubject<boolean>(this.checkAuthStatus());
  authStatus$ = this.authStatusSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  login(userData: any): Observable<any> {
    return this.http.post<any>(this.url, userData).pipe(
      tap((rep: any) => {
        if (rep.accessToken) {
          localStorage.setItem("accessToken", rep.accessToken);
          this.authStatusSubject.next(true);
        }
      })
    );
  }

  private checkAuthStatus(): boolean {
    return localStorage.getItem('accessToken') !== null;
  }

  isAuthenticated(): boolean {
    return this.checkAuthStatus();
  }

  logout(): void {
    localStorage.clear();
    this.authStatusSubject.next(false);
  }
}
