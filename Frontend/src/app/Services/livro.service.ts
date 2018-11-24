import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro'
import { Retorno } from './retorno'


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) {}
  
  getUsuarioNome(titulo: string): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:8000/api/livro/getnome/' + titulo);
  }

  insertUsuario(livro: Livro): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/livro/insert/', livro);
  }

  updateUsuario(livro: Livro): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/livro/update/' + livro.titulo, livro);
  }

  deleteUsuario(titulo: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/livro/remove/' + titulo);
  }
}
