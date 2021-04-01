import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {login: '', senha:''};

  constructor(private loginService: LoginServiceService, private router: Router){

  }

  public login(){
    this.loginService.login(this.usuario);
  }

  public recuperar(){
    this.loginService.recuperar(this.usuario.login);
  }

  ngOnInit() {
    if(localStorage.getItem('token') != null && localStorage.getItem('token').toString != null){
      this.router.navigate(['home']);
      /**Quando logado não entrará na tela de login
       * será encaminhando para página Home
      */

    }
  }

}
