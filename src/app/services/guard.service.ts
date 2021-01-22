import { environment } from './../../environments/environment';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(
    private loginService: LoginService,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //Verificar la autenticación
    let rpta = this.loginService.SignIn();
    if(!rpta){
      this.loginService.Logout();
      return false;
    }else{
      const helper = new JwtHelperService();
      let token = sessionStorage.getItem(environment.TOKEN_NAME);
      if(!helper.isTokenExpired(token)){
        return true;
      }else{
        this.loginService.Logout();
        return false;
      }
    }



    return false;
  }
}