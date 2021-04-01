import { ParamentroSalario } from './../model/ParamentroSalario';
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
  getUsuariosPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL + "page/" + pagina);
  }

  deletar(id: Number): Observable<any> {
    return this.http.delete<any>(AppConstants.baseURL + id);
  }

   //http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/alex
  consultarUser(nome: String): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL + "usuarioPorNome/" + nome);

  }
  consultarUserPoPage(nome: String, page : Number): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL + "usuarioPorNome/" + nome + "/page/" + page);
  }

  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseURL + 'page/' + pagina);
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

  removerTelefone(id): Observable<any>{
    return this.http.delete<any>(AppConstants.baseURL + "removerTelefone/" + id, {responseType: 'text' as 'json' });
  }

  userAuthentication(){
    if(localStorage.getItem('token') != null && localStorage.getItem('token').toString != null){
      /**Verificar se está logado
       * Só tem token quem está logado
      */
     return true;
    }else {
      return false;
    }
  }

  listaProfissao(): Observable<any>{
    return this.http.get<any>(AppConstants.baseURLProfissao);
  }

  downloadPdf(){
    return this.http.get<any>(AppConstants.baseURL + "relatorio/", {responseType: 'text' as 'json'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }

  downloadPdfSalario(paramentroSalario: ParamentroSalario) {
    return this.http.post<any>(AppConstants.baseURL + "relatorio/", paramentroSalario , {responseType: 'text' as 'json'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }

  carregarGrafico(): Observable<any>{
    return this.http.get<any>(AppConstants.baseURL + "grafico");
  }
}
