import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class UserService {
  apiUrl: "https://localhost:8080/calibroz/api/regPatients";

  constructor(private http: HttpClient) { }
 
  register(user: User) {
    return this.http.post(`${this.apiUrl}`,  user);
}
}
