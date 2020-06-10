import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(): boolean{
    if(this.authService.loginIn()){
      return true;
    }
    this.router.navigate(["/entrar"]);
    return false;
  }
  
}
