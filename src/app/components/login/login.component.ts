import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.senha).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/index']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}



