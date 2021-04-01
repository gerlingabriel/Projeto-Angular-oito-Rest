import { ParamentroSalario } from './../../../model/ParamentroSalario';
import { Component, OnInit, Injectable } from '@angular/core';
/** ActivatedRoute consegue pegar dados de uma página para outra */
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/service/usuario.service';



@Component({
  selector: 'app-usuario-relatorio',
  templateUrl: './usuario-relatorio.component.html',
  styleUrls: ['./usuario-relatorio.component.css']

})
export class UsuarioRelatorioComponent {

  paramentroSalario = new ParamentroSalario();


  constructor(private activatedRoute: ActivatedRoute, private usuarioAngularService: UsuarioService) { }

  imprimiRelatorio(){

    var valorSalario1Convertido=Number(this.paramentroSalario.salario1);
    var valorSalario2Convertido=Number(this.paramentroSalario.salario2);

    if(valorSalario2Convertido < valorSalario1Convertido) {
      alert('Valores dos paramentros errado!')
      return new Error("Erro ao imprimir relatorio!");
    } else {
      console.log(this.paramentroSalario);
      return this.usuarioAngularService.downloadPdfSalario(this.paramentroSalario);
      console.log("depois do método");
    }

  }

  novo(){
    this.paramentroSalario = new ParamentroSalario();
  }


}
