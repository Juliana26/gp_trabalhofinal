export interface Livro {
    _id:string;
    titulo: string;
    numero_paginas: number;
    autor: {
        id_autor: number;
        nome: string;
    }[];
    editora: {
        id_editora: number;
        nome: string;
    }[];
    sinopse: string;
    comentarios: {
        id_autor: string;
        comentario: string;
        autor_comentario: string;        
    }[];
    avaliacao: number;
}
export class Livro implements Livro{
    constructor(){
        
    }
}