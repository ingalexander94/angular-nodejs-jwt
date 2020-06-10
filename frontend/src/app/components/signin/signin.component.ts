import { Component, OnInit } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginUser: User = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn = () => {
    this.authService.signIn(this.loginUser).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/tareasPrivadas"]);
      },
      error => {
        console.log(error);
        alert("Usuario no existe");
        this.loginUser = {
          email: "",
          password: ""
        };
      }
    )
  }

}
