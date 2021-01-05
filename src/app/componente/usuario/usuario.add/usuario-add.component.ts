import { Component, OnInit } from '@angular/core';
/** ActivatedRoute consegue pegar dados de uma página para outra */
import { ActivatedRoute } from '@angular/router';
import { UsuarioAngular } from 'src/app/model/usuario-angular';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new UsuarioAngular();

  constructor(private activatedRoute: ActivatedRoute, private usuarioAngularService: UsuarioService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null){

      // comando isado para teste no navgador  - console.log('Valor sendo editado: ' +id)
      this.usuarioAngularService.getUsuario(id).subscribe(data => {
        this.usuario = data;
      });

    }

  }

  salvar(){
    // teste de comando - console.log(this.usuario);
    if(this.usuario.id != null){ /**Atualizando ou editando */
      this.usuarioAngularService.updateUsuario(this.usuario).subscribe(data => {
        console.info("usuário atualizando" + this.usuario);
        this.novo();
      });

    }else{/**Salvando um novo usuário */
      this.usuarioAngularService.salvarUsuario(this.usuario).subscribe(data => {
        console.info("usuário saldo" + this.usuario);
        this.novo();
      });

    }
  }

  novo(){
    this.usuario = new UsuarioAngular();
  }

}
