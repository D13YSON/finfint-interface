import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

  // addUser
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}usuarios/`, user);
  }

  // getUserAll
  getUserAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}usuarios/`);
  }

  // getUserById
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}usuario/${id}`);
  }

  // updateUser
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}usuario/${id}/`, user);
  }

  // deleteUserById
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}usuario/${id}/`);
    }

}
