import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Editora } from './editora.model'
import { Retorno } from './retorno.model'


@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  constructor(private http: HttpClient) {}
  
  getEditoraNome(nome: string): Observable<Editora> {
    return this.http.get<Editora>('http://localhost:8000/api/editora/getnome/' + nome);
  }

  insertEditora(editora: Editora): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/editora/insert/', editora);
  }

  updateEditora(editora: Editora): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/editora/update/' + editora.nome, editora);
  }

  deleteEditora(nome: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/editora/remove/' + nome);
  }
}
