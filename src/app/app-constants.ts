export class AppConstants {

  public static get baseServidor(): string {
    return "http://localhost:8080/";
  }

  public static get baseLogin(): string {
    return this.baseServidor + "cursoApredendoRest/login";
  }

  public static get baseURL(): string {
    return this.baseServidor + "cursoApredendoRest/usuario/";
  }
  
}
