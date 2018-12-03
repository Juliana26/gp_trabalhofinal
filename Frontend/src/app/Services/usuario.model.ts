export interface Usuario {
    _id: string;
    email: string;
    login: string;
    senha: string;
    nome: string;
    datadenascimento: Date;
    ativo: boolean;
    tipo: string[];
    sexo: string;
    estado: string;
    pretensao_leitura: {
        id_livro: string,
        nome_livro: string,
        nome_autor: string
    }[];
    leitura_andamento: {
        id_livro: string,
        nome_livro: string,
        nome_autor: string
    }[];
    leitura_concluida: {
        id_livro: string,
        nome_livro: string,
        nome_autor: string
    }[];
    meta_leitura: {
        nome_livro: string,
        data_inicio_previsao: Date,
        data_termino_previsao: Date,
        tempo_leitura: number,
        status: string
    }[];
    periodo_leitura: {
        id_livro: number,
        nome_livro: string,
        inicio_leitura: Date,
        termino_leitura: Date,
        comentários: string
    }[];
}