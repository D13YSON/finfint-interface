import { Component } from '@angular/core';
import { Connection } from '../../services/connection.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  nome: string = '';
  senha: string = '';
  email: string = '';
  data_nascimento: Date|null = null;
  termo: boolean = false;

  constructor(private connection: Connection, private router: Router) { }

  // Método para enviar os dados do usuário para o backend
  postUser(): void {
    const userData = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      termo: this.termo,
      data_nascimento: this.data_nascimento
    };

    this.connection.postUser(userData).subscribe(
      response => {
        console.log('Usuário registrado com sucesso:', response);
        // Lógica adicional, como redirecionar para outra página ou exibir uma mensagem de sucesso
      },
      error => {
        console.error('Erro ao registrar usuário:', error);
        // Lógica adicional, como exibir uma mensagem de erro para o usuário
      }
    );
  }

  // Método chamado quando o formulário é enviado
  onSubmit(): void {
    if (this.verifyName() && this.verifyPassword() && this.verifyEmail() && this.verifyServiceTerms()) {
      this.postUser();
    }
  }

  // Método para verificar se o nome só contém letras
  verifyName(): boolean {
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(this.nome)) {
      return true;
    } else {
      alert('O campo só permite letras.');
      return false;
    }
  }

  // Método para verificar se a senha tem pelo menos 6 caracteres
  verifyPassword(): boolean {
    if (this.senha.length >= 6) {
      return true;
    } else {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }
  }

  // Método para verificar se o email está em um formato válido
  verifyEmail(): boolean {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(this.email)) {
      return true;
    } else {
      alert('O email deve estar no formato correto (exemplo@dominio.com).');
      return false;
    }
  }

  // Método para verificar se o termo de serviço foi aceito
  verifyServiceTerms(): boolean {
    if (this.termo) {
      return true;
    } else {
      alert('Você precisa concordar com os termos de serviço para continuar.');
      return false;
    }
  }
}