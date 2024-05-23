import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CadastroComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router) { }

  navigateToCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
