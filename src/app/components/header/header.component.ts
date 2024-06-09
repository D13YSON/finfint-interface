import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ViewUsersComponent } from '../users/view-users/view-users.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ViewUsersComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router) { }

  navigateToSignUp(): void {
    this.router.navigate(['/view-users']);
  }
}

