import { Telefone } from "./telefone";

export class UsuarioAngular {
  id: Number;
  login: String;
  nome: String;
  senha: String;

  telefones: Array<Telefone>;
}
