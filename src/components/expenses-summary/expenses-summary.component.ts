import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { RevenuesService } from '../../services/revenues.service';
import { Expense } from '../../models/expenses.model';
import { CommonModule } from '@angular/common';
import { Revenues } from '../../models/revenues.model';


@Component({
  selector: 'app-expenses-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses-summary.component.html',
  styleUrls: ['./expenses-summary.component.css']
})

export class ExpensesSummaryComponent implements OnInit {
  saldoAtual: number = 0.0;
  receitas: number = 0.0;
  despesas: number = 0.0;
  
  constructor(private ExpensesService: ExpensesService, private RevenuesService: RevenuesService) { }

  ngOnInit(): void {
    this.ExpensesService.expenses$.subscribe(expenses => {
      this.calculateExpenses(expenses);
      this.calculateSaldo();
    });

    this.RevenuesService.revenues$.subscribe(revenues =>{
      this.calculateRevenues(revenues);
      this.calculateSaldo();
    });
  }

  private calculateExpenses(expenses: Expense[]): void {
    this.despesas = expenses.reduce((total, expense) => total + parseFloat(expense.valor.toFixed(2)), 0);
  }

  private calculateRevenues(revenues: Revenues[]): void {
    this.receitas = revenues.reduce((total, revenue) => total + parseFloat(revenue.valor.toFixed(2)), 0);
  }

  private calculateSaldo(): void {
    this.saldoAtual = parseFloat((this.receitas - this.despesas).toFixed(2));
  }
}
