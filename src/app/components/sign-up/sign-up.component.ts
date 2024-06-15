import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { AddUserComponent } from '../users/add-user/add-user.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AddUserComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(private router: Router) { }
  
}

