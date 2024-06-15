import { Component } from '@angular/core';
import { UsersService } from '../../../users.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private service: UsersService, private router: Router) { }
  
    ngOnInit(): void {
    }

    data: any

    form = new FormGroup({
      nome: new FormControl('', Validators.required),
      data_nascimento: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      aceite_termo: new FormControl(false, Validators.requiredTrue)

    });

    addUser() {
      this.data = this.form.value;
      this.service.addUser(this.data).subscribe(data => {
        console.log(this.data)
        // redirect to home page
        this.router.navigate(['/']);
      });
    }
}
