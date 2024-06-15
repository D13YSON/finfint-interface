import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SignUpComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router) { }

  navigateToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}

