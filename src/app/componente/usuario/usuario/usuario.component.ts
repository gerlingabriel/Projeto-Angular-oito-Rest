import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioAngular } from "src/app/model/usuario-angular";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
})
export class UsuarioComponent implements OnInit {
  students: Observable<UsuarioAngular[]>; /**Lista da tela -- Array */
  auxIdUsuario : Number;
  nome: String;


  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.students = data;
      //console.log(data);
      //console.log(this.students);
    });
  }

  deleteUsuario(id: Number) {
    this.auxIdUsuario = id;
    
  }

  onConfirmando(){

    this.usuarioService.deletar(this.auxIdUsuario).subscribe((data) => {
      console.log(data);

      /**Recarregar a página */
      this.usuarioService.getUsuarios().subscribe((data) => {
        this.students = data;
        //console.log(data);
        //console.log(this.students);
      });
    });
    
  }

  conultarUsuario(){
    if(!this.nome) { /**Tratamento em caso o cmapo da pesquisar estiver vazia */

      this.usuarioService.getUsuarios().subscribe((data) => {
        this.students = data;
        //console.log(data);
        //console.log(this.students);
      });

    } else {

      this.usuarioService.consultarUsuario(this.nome).subscribe(data =>{
        this.students = data;
      });

    }
    
  }


}
