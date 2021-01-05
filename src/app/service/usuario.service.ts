import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL);
  }

  deletar(id: Number): Observable<any> {
    return this.http.delete<any>(AppConstants.baseURL + id);
  }

  consultarUsuario(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseURL + "usuarioPorNome/" + nome);
  }

  getUsuario(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL + id);
  }

  salvarUsuario(usuario): Observable<any>{
    return this.http.post<any>(AppConstants.baseURL, usuario);
  }

  updateUsuario(usuario): Observable<any>{
    return this.http.put<any>(AppConstants.baseURL, usuario);
  }
}
