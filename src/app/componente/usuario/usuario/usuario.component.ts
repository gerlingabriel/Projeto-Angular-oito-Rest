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
  students: Array<UsuarioAngular[]>; /**Lista da tela -- Array */
  auxIdUsuario : number;
  auxIndex: number;
  nome: String;
  p: number;
  total: number;
  paginaDeBusca: number;
  pagina: number;


  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.students = data.content; /**Puxa certo as paginas | sem esse não sabe puxar elementos PAGE */
      this.total = data.totalElements; /** Saber quandotas paginas será divididas*/
      //console.log(data);
      //console.log(this.students);
      this.pagina = 1;
    });
  }

  deleteUsuario(id: number, index: number) {
    this.auxIdUsuario = id;
    this.auxIndex = index;

    /** Ttinha uma forma de fazer a confirmação  (sim ou não mais facil)
     * Era envolver o comando do delete em
     * if(confirm('Deseja deletar esse item?')){
     * Envolver todo raciocinio
     * }
     */

  }

  onConfirmando(){ /**Confirmar o comando de delete */

    this.usuarioService.deletar(this.auxIdUsuario).subscribe((data) => {
      console.log(data);

      this.students.splice(this.auxIndex, 1); /**Remover o inddice da tela */

      /**Recarregar a página */
      //this.usuarioService.getUsuarios().subscribe((data) => {
        //this.students = data;
        //console.log(data);
        //console.log(this.students);
      //});
    });

  }

  conultarUsuario(nome){
    if(!this.nome) { /**Tratamento em caso o cmapo da pesquisar estiver vazia */

      this.usuarioService.getUsuarios().subscribe((data) => {
        this.students = data.content;
        this.total = data.totalElements;
        //console.log(data);
        //console.log(this.students);
      });

    } else {

      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });

    }


  }

  carregarPAginacao(pagina){

    if (this.nome !== '') {
      this.usuarioService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
    else {
       this.usuarioService.getUsuariosPage(pagina - 1).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }

  imprimeRelatorio(){
    return this.usuarioService.downloadPdf();
  }


}
