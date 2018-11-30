export interface Editora {
    _id:string;
    nome: string;
    endereco: {
        logradouro: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    }[];
    historia: string;
}