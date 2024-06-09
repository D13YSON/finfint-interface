import { Component } from '@angular/core';
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

  constructor(private router: Router) { }

  // Método chamado quando o formulário é enviado
  onSubmit(): void {
    if (this.verifyName() && this.verifyPassword() && this.verifyEmail() && this.verifyServiceTerms()) {

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