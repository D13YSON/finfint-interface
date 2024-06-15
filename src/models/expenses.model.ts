import { Categoria } from "./categoria.model";

export interface Expense {
    usuario: string;
    categoria: Categoria;
    titulo_debito: string;
    data_saida: Date;
    valor: number;
    descricao: string;
  }