import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL_BACKEND = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  getTasksPrivate = () => {
    return this.http.get(`${this.URL_BACKEND}/tareasPrivadas`);
  }

  getTasksPublic = () => {
    return this.http.get(`${this.URL_BACKEND}/tareasPublicas`);
  }

}
