import { Profissao } from './../../../model/Profissao';
import { Component, OnInit, Injectable } from '@angular/core';
/** ActivatedRoute consegue pegar dados de uma página para outra */
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Telefone } from 'src/app/model/telefone';
import { UsuarioAngular } from 'src/app/model/usuario-angular';
import { UsuarioService } from 'src/app/service/usuario.service';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string>{

  readonly DELIMITIER = '/'; //Para saber que delimitador da data sera "/"

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITIER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }
  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITIER + date.month + this.DELIMITIER + date.year : null;
  }

}

@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITIER = '/'; //Para saber que delimitador da data sera "/"

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITIER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct): string | null {
    return date ? validarDate(date.day) + this.DELIMITIER + validarDate(date.month) + this.DELIMITIER + date.year : '';
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITIER + date.month + this.DELIMITIER + date.year : null;
  }

}

function validarDate(valor) {
  if (valor.toString !== '' && parseInt(valor) <= 9) {
    return '0' + valor;
  }
  return valor;

}

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'],
  providers: [
    {
      provide: NgbDateParserFormatter,
      useClass: FormataData
    },
    {
      provide: NgbDateAdapter,
      useClass: FormatDateAdapter
    }
  ]
})
export class UsuarioAddComponent implements OnInit {

  usuario = new UsuarioAngular();
  telefone = new Telefone();
  profissoes : Array<Profissao>; /** Fica em OBS pois diferentes dos acima a atribuição para array é diferente */

  constructor(private activatedRoute: ActivatedRoute, private usuarioAngularService: UsuarioService) { }

  ngOnInit() {

    this.usuarioAngularService.listaProfissao().subscribe(arg => {
      this.profissoes = arg;
      //console.log(this.profissoes);
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id != null) {
      // comando isado para teste no navgador  - console.log('Valor sendo editado: ' +id)
      this.usuarioAngularService.getUsuario(id).subscribe(data => {
        this.usuario = data;
      });

    }

  }

  salvar() {
    // teste de comando - console.log(this.usuario);
    if (this.usuario.id != null) { /**Atualizando ou editando */
      this.usuarioAngularService.updateUsuario(this.usuario).subscribe(data => {
        console.info("usuário atualizando" + this.usuario);
        this.novo();
      });

    } else {/**Salvando um novo usuário */
      this.usuarioAngularService.salvarUsuario(this.usuario).subscribe(data => {
        console.info("usuário saldo" + this.usuario);
        this.novo();
      });

    }
  }

  novo() {
    this.usuario = new UsuarioAngular();
    this.telefone = new Telefone();
  }

  deleletarTel(id, i) {

    if (id == null) { // deletar telefone que foi add, mas que ainda não foi add no banco de dados
      this.usuario.telefones.splice(i, 1);
      return;
    }

    if (id != null && confirm("Deseja deletar telefone?")) {
      this.usuarioAngularService.removerTelefone(id).subscribe(data => {

        this.usuario.telefones.splice(i, 1);
        console.info("Telefone removido = " + data)
      });
    }

  }

  addfone() {
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }

}
