import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
/** Ativar o AJax */
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; 
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioAddComponent } from './componente/usuario/usuario.add/usuario-add.component';


export const appRouters: Routes = [

  {path : 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},
  {path: 'userList', component : UsuarioComponent},
  {path: 'usuarioAdd', component: UsuarioAddComponent},
  {path: 'usuarioAdd/:id', component: UsuarioAddComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
