import { Categoria } from "./categoria.model";

  export interface Revenues {
      usuario: string;
      categoria: Categoria;
      titulo_debito: string;
      data_entrada: Date;
      valor: number;
      descricao: string;
    }