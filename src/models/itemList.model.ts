import { Categoria } from "./categoria.model";

export interface itemList {
    type: 'expense' | 'revenue';
    usuario: string;
    categoria: Categoria;
    titulo_debito: string;
    data: Date;
    valor: number;
    descricao: string;
}