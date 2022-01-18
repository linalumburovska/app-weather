import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}
  
  login(user: User) {
    localStorage.setItem('X-token', user.email + new Date());
    this.router.navigate(['weather']);
    // If the token came from BE, the token would be attached in the following way:
    // EXAMPLE: the token is the field 'token' from the BE response
    // Using the interceptor the header Authorization will have the value "Bearer " + authToken 
    // return this.http.post(this.apiUrl + 'login', user)
    // .subscribe((res: any) => {
    //   if(res) {
    //     localStorage.setItem('X-token', res.token);
    //     this.router.navigate(['weather']);
    //   }
    // })
  }

  getToken() {
    return localStorage.getItem('X-token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('X-token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    let removeToken = localStorage.removeItem('X-token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }
}