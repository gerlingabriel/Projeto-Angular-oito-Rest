import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioAngular } from 'src/app/model/usuario-angular';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Observable<UsuarioAngular[]>;

  constructor(private usuarioService: UsuarioService) { }
 

  ngOnInit() {

    this.usuarioService.getUsuarios().subscribe(data =>{
      this.students = data;
      //console.log(data);
      //console.log(this.students);

    });

  }

}
