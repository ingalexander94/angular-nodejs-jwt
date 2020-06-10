import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private authService:AuthService, private router: Router){
  }

  logout = () =>{
    this.authService.loginOut();
    this.router.navigate(["/entrar"]);
  }

  loginIn = () => {
    return this.authService.loginIn();
  }

}
