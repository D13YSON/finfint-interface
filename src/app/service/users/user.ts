export default interface User{
    id: number;
    nome: string;
    data_nascimento: Date;
    email: string;
    senha: string;
    aceite_termo: boolean;
}