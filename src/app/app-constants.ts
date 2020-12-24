export class AppConstants {

  public static get baseServidor(): string {
    return "/api";
    /** Esse "/api" serve para burlar o erro de Cors que não deixa comunicar com back end depois que criar o 
     * metodo HEADER-INTERCEPTOR.SERVICE
     */
  }

  public static get baseLogin(): string {
    return this.baseServidor + "cursoApredendoRest/login";
  }

  public static get baseURL(): string {
    return this.baseServidor + "cursoApredendoRest/usuario/";
  }
  
}
