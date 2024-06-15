import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { RevenuesComponent } from '../revenues/revenues.component';
import { CategoriesComponent } from '../categories/categories.component';
import { title } from 'process';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  saldoPrevisto = 1000;
  isOpen: boolean = false;

  constructor(public dialog: MatDialog) { }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

  openModalExpenses() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { title: 'Despesas', component: ExpensesComponent }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openModalRevenues() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { title: 'Receitas', component: RevenuesComponent }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openModalCategories() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {title: 'Categorias', component: CategoriesComponent}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
