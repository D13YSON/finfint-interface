import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private router: Router) { }

  navigateToCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
