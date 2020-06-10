import { Component, OnInit } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  newUser: User = {
    email: "",
    password: ""
  };

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp = () => {
    this.authService.signUp(this.newUser).subscribe(
      (res:any) => {
        localStorage.setItem("token",res.token);
        this.router.navigate(["/tareasPrivadas"]);
      },
      error => console.error(error)
    );
  }

}
