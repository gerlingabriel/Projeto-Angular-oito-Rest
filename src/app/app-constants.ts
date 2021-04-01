export class AppConstants {

  public static get baseServidor(): string {
    return "http://localhost:8080/";
    /** Esse "/api" serve para burlar o erro de Cors que não deixa comunicar com back end depois que criar o
     * metodo HEADER-INTERCEPTOR.SERVICE ("/api")
     */
  }

  public static get baseLogin(): string {
    return this.baseServidor + "cursoApredendoRest/login";
  }

  public static get baseURL(): string {
    return this.baseServidor + "cursoApredendoRest/usuario/";
  }

  public static get baseURLProfissao(): string {
    return this.baseServidor + "cursoApredendoRest/profissao/";
  }

  public static get baseURLEmail(): string {
    return this.baseURL + "recuperar/";
  }

}
