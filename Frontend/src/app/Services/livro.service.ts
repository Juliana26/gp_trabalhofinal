import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model'
import { Retorno } from './retorno.model'


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) {}
  
  getLivroNome(titulo: string): Observable<Livro> {
    return this.http.get<Livro>('http://localhost:8000/api/livro/getnome/' + titulo);
  }

  insertLivro(livro: Livro): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livro/insert/', livro);
  }

  updateLivro(livro: Livro): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livro/update/' + livro.titulo, livro);
  }

  deleteLivro(titulo: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livro/remove/' + titulo);
  }
}
