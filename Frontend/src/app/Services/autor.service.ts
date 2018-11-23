import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Autor } from './autor'
import { Retorno } from './retorno'


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) {}
  
  getUsuarioNome(nome: string): Observable<Autor[]> {
    return this.http.get<Autor[]>('http://localhost:8000/api/autor/getnome/' + nome);
  }

  insertUsuario(autor: Autor): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/autor/insert/', autor);
  }

  updateUsuario(autor: Autor): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/autor/update/' + autor.nome, autor);
  }

  deleteUsuario(nome: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/autor/remove/' + nome);
  }
}
