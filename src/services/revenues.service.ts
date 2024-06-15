import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Revenues } from '../models/revenues.model';

@Injectable({
  providedIn: 'root'
})

export class RevenuesService {
  private revenuesSubject = new BehaviorSubject<Revenues[]>([]);
  revenues$ = this.revenuesSubject.asObservable();

  addRevenues(revenue: Revenues): void {
    const revenues = this.revenuesSubject.getValue();
    revenues.push(revenue);
    this.revenuesSubject.next(revenues);
  }

  getRevenues(): Revenues [] {
    return this.revenuesSubject.getValue();
  }
}
