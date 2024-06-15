import { HomeComponent } from './components/home/home.component'; 
import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: IndexComponent }
    
  ];


