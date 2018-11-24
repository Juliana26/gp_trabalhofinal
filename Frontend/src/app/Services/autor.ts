export interface Autor {
    _id:string;
    nome: string;
    data_nascimento: Date;
    data_falecimento: string;
    curiosidades: string;
}
export class Autor implements Autor{
    constructor(){
    }
}