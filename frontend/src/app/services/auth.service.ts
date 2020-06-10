import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_BACKEND = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  signUp(user: User){
    return this.http.post(`${this.URL_BACKEND}/registrar`,user);
  }

  signIn(user: User){
    return this.http.post(`${this.URL_BACKEND}/entrar`,user);
  }

  loginIn(){
    return !!localStorage.getItem("token");
  }

  loginOut(){
    localStorage.removeItem("token");
  }

  getToken(){
    return localStorage.getItem("token");
  }

}
