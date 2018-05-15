import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users"
  constructor(
    private http: HttpClient;
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
}
