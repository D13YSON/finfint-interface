import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpensesService } from '../../services/expenses.service';
import { Expense } from '../../models/expenses.model';
import { ModalComponent } from '../modal/modal.component';
import { CategoriesComponent } from '../categories/categories.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'  
})
export class ExpensesComponent {
  categorias: Categoria[] = [];
  expenseForm: FormGroup;

  constructor(private categoriaService: CategoriaService, private fb: FormBuilder, private expensesService: ExpensesService, private dialog: MatDialog) {
    this.expenseForm = this.fb.group({
      usuario: ['', Validators.required],
      categoria: [null, Validators.required], 
      titulo_debito: ['', Validators.required],
      data_saida: ['', Validators.required],
      valor: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoriaService.categorias$.subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  onSubmit(): void {
    if (this.expenseForm.valid) {
      const newExpenses = this.expenseForm.value as Expense;
      this.expensesService.addExpense(newExpenses);
      this.expenseForm.reset();
    }
  }

  openModalCategories() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {title: 'Categorias', component: CategoriesComponent}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
