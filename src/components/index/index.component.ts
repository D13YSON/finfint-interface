import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ExpensesComponent } from '../expenses/expenses.component'
import { ExpensesSummaryComponent } from '../expenses-summary/expenses-summary.component';
import { ListComponent } from '../list/list.component';
import { FotterComponent } from '../fotter/fotter.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, ExpensesComponent, ExpensesSummaryComponent, ListComponent, FotterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
