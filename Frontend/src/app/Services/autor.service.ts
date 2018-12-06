import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Autor } from './autor.model'
import { Retorno } from './retorno.model'


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) {}
  
  getAutorNome(nome: string): Observable<Autor> {
    return this.http.get<Autor>('http://localhost:8000/api/autor/getnome/' + nome);
  }

  insertAutor(autor: Autor): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/autor/insert/', autor);
  }

  updateAutor(autor: Autor): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/autor/update/' + autor.nome, autor);
  }

  deleteAutor(nome: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/autor/remove/' + nome);
  }
}
