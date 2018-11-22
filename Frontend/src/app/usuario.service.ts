import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario/usuario'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8000/api/cats');
  }

  getUsuario(nome: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8000/api/usuario/' + nome);
  }

  insertUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8000/api/cats/', usuario);
  }

  updateUsuario(usuario: Usuario): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/cats/' + usuario.nome, usuario);
  }

  deleteUsuario(nome: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + nome);
  }
}
