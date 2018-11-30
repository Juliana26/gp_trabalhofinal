export interface Usuario {
    _id: string,
    email: string,
    login: string,
    senha: string,
    nome: string,
    data_nascimento: Date,
    ativo: number,
    sexo: string,
    estado: string,
}