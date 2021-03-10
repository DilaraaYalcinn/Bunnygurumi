import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User= new User(); 
  readonly rootURL = "http://localhost:2805/api";
  constructor(private http: HttpClient) { }

    getUser(Username:string) {
    return this.http.get(`${this.rootURL}/User/${Username}`);
  }
}
