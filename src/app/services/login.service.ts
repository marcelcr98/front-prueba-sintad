import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `${environment.HOST}/oauth/token`
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(usuario: string, password: string) {
    const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(password)}`;

    return this.http.post<any>(this.url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8').set('Authorization', 'Basic ' + btoa(environment.TOKEN_AUTH_USERNAME + ':' + environment.TOKEN_AUTH_PASSWORD))
    });
  }

  SignIn(){
    let token= sessionStorage.getItem(environment.TOKEN_NAME);
    return token != null;
  }
  Logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}