import { UsuarioAngular } from './../../../Projeto-Angular-oito-Rest/src/app/model/usuario-angular';
import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppConstants } from "../app-constants";

@Injectable({
  providedIn: "root",
})

export class LoginServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  login(usuario) {
    // teste - console.info("Usuario: " + usuario.login )

    return this.http
      .post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe((data) => {
          /**Retorno Http */

          var token = JSON.parse(JSON.stringify(data)).Authorization.split(" ")[1];

          localStorage.setItem("token", token);
          // teste no navegador -
          console.log("Token: " +localStorage.getItem("token"));

          this.router.navigate(["home"]);
        },
        error => {
          console.error("Erro de Login");
          alert("Acesso Negado");
        }
      );
  }

  recuperar (login) {

    let user = new UsuarioAngular();
    user.login = login;

    return this.http.post(AppConstants.baseURLEmail, user).subscribe((data) => {

      alert( JSON.parse(JSON.stringify(data)).error);

        },
        error => {
          console.error("Erro ao acessar Login");
          alert("Acesso Negado");
        }
      );
  }

}
