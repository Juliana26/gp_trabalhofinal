import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario/usuario'

export interface Retorno{
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getUsuario(nome: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8000/api/usuario/' + nome);
  }

  insertUsuario(usuario: Usuario): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/usuario/insert/', usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/usuario/update/' + usuario.nome, usuario);
  }

  deleteUsuario(nome: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/usuario/remove/' + nome);
  }
}
