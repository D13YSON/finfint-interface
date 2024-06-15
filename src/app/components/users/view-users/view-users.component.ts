import { Component } from '@angular/core';
import { UsersService } from '../../../users.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
  usuarios: any | undefined

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserAll().subscribe(data=>{
      this.usuarios = data
      console.log(data)
    })
    
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit()
    })
  }
}
