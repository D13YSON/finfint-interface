import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { ViewUsersComponent } from './components/users/view-users/view-users.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'view-users', component: ViewUsersComponent },
    
  ];