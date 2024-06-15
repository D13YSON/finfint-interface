import { Injectable } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import User from '../user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private usersService: UsersService) {}

  login(email: string, senha: string): Observable<boolean> {
    return this.usersService.getUserAll().pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.senha === senha);
        return !!user;
      })
    );
  }

  logout(): void {
    // Implementar lógica de logout se necessário
  }
}


