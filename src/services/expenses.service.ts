import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expenses.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private expensesSubject = new BehaviorSubject<Expense[]>([]);
  expenses$ = this.expensesSubject.asObservable();

  addExpense(expense: Expense): void {
    const expenses = this.expensesSubject.getValue();
    expenses.push(expense);
    this.expensesSubject.next(expenses);
  }

  getExpenses(): Expense [] {
    return this.expensesSubject.getValue();
  }
}
