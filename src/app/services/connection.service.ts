// connection.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class Connection {
  private baseUrl = 'http://localhost:8000/'; // URL base do seu backend Django

  constructor(private http: HttpClient) {}

  // Método para obter dados do backend
  getUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}usuario/`);
  }

  // Método para enviar dados do usuário para o backend
  postUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}usuario/`, userData);
  }

  // Método para obter categorias do backend
  getCategoria(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}categoria/`);
  }
}
