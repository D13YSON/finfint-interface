import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-portal.component.html',
  styleUrl: './dashboard-portal.component.css'
})
export class DashboardPortalComponent {
  constructor(private router: Router) { }

  navigateToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
