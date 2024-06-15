import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  private categoriasSubject = new BehaviorSubject<Categoria[]>([]);
  categorias$ = this.categoriasSubject.asObservable();

  adicionarCategoria(categoria: Categoria) {
    const categorias = this.categoriasSubject.getValue();
    categorias.push(categoria);
    console.log("ADD Categoria:", categorias);
    this.categoriasSubject.next(categorias);
  }

  getCategorias(): Categoria[] {
    console.log("pegando Categoria:", this.categoriasSubject.getValue());
    return this.categoriasSubject.getValue();
  }

}
