import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expenses.model';
import { Revenues } from '../../models/revenues.model';
import { itemList } from '../../models/itemList.model';
import { ExpensesService } from '../../services/expenses.service';
import { RevenuesService } from '../../services/revenues.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items: itemList[] = [];
  currentIndex = 0;

  constructor(private expensesService: ExpensesService, private revenuesService: RevenuesService) {}
  
  ngOnInit(): void {
    this.expensesService.expenses$.subscribe(expenses => {
      this.items.push(...expenses.map(expense => this.createItem(expense, 'expense')));
      if (this.items.length > 0) {
        this.currentIndex = 0;
      }
    });

    this.revenuesService.revenues$.subscribe(revenues => {
      this.items.push(...revenues.map(revenue => this.createItem(revenue, 'revenue')));
      if (this.items.length > 0) {
        this.currentIndex = 0;
      }
      console.log(this.items);
    });
  }

  private createItem(data: Expense | Revenues, type: 'expense' | 'revenue'): itemList {
    console.log(data);
    return {
      type,
      usuario: data.usuario,
      categoria: data.categoria,
      titulo_debito: data.titulo_debito,
      data: type === 'expense' ? (data as Expense).data_saida : (data as Revenues).data_entrada,
      valor: data.valor,
      descricao: data.descricao
    };
  }

  currentType(): string {
    return this.items.length > 0 ? this.items[this.currentIndex].type === 'expense' ? 'Despesas' : 'Receitas' : '';
  }
  
  nextItem(): void {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  previousItem(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  isNextDisabled(): boolean {
    return this.currentIndex >= this.items.length - 1;
  }

  isPreviousDisabled(): boolean {
    return this.currentIndex <= 0;
  }
}
