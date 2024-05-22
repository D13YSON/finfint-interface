import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  senha: string = '';
  email: string = '';
  celular: string = '';
  termo: boolean = false;

  onSubmit() {
    if (this.verifyName() && this.verifyPassword() && this.verifyEmail() && this.verifyNumerPhone() && this.verifyServiceTerms()) {
      // Submeter o formulário ou realizar outras ações necessárias
      alert("Formulário enviado com sucesso!");
    }
  }

  verifyName(): boolean {
    const regex = /^[a-zA-Z]+$/;

    if (regex.test(this.nome)) {
      return true;
    } else {
      alert("O campo só permite letras.");
      return false;
    }
  }

  verifyPassword(): boolean {
    if (this.senha.length >= 6) {
      return true;
    } else {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }
  }

  verifyEmail(): boolean {
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(this.email)) {
      return true;
    } else {
      alert("O email deve estar no formato correto (exemplo@dominio.com).");
      return false;
    }
  }

  verifyServiceTerms(): boolean {
    if (this.termo) {
      return true;
    } else {
      alert("Você precisa concordar com os termos de serviço para continuar.");
      return false;
    }
  }

  verifyNumerPhone(): boolean {
    const phoneDigitsOnly = this.celular.replace(/\D/g, '');

    if (phoneDigitsOnly.length === 11) {
      return true;
    } else {
      alert("O número de celular deve conter 11 dígitos e seguir o formato: (XX) 9 XXXX-XXXX");
      return false;
    }
  }
}
