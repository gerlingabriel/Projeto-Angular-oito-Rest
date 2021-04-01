import { Profissao } from "./Profissao";
import { Telefone } from "./telefone";

export class UsuarioAngular {
  id: Number;
  login: String;
  nome: String;
  senha: String;
  dataNascimento: String;
  salario: Number;

  telefones: Array<Telefone>;
  profissao: Profissao = new Profissao();
}
