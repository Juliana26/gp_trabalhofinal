import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model'
import { Retorno } from './retorno.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario

  constructor(private http: HttpClient) {}

  getUsuarioLogin(login: string): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:8000/api/usuario/getlogin/' + login);
  }
  
  getUsuarioNome(nome: string): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:8000/api/usuario/getnome/' + nome);
  }

  insertUsuario(usuario: Usuario): Observable<Retorno> {
    return this.http.post<Retorno>('http://localhost:8000/api/usuario/insert/', usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Retorno> {
    return this.http.put<Retorno>('http://localhost:8000/api/usuario/update/' + usuario.login, usuario);
  }

  deleteUsuario(login: string):Observable<Retorno> {
    return this.http.delete<Retorno>('http://localhost:8000/api/usuario/remove/' + login);
  }
}
