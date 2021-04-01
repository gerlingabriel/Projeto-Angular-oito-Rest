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
import { GuardiaoGuard } from './service/guardiao.guard';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCurrencyModule } from "ngx-currency";
import { UsuarioRelatorioComponent } from './componente/usuario/usuario-relatorio/usuario-relatorio.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './componente/bar-chart/bar-chart.component';


export const appRouters: Routes = [

  {path : 'home', component : HomeComponent, canActivate: [GuardiaoGuard] },
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},
  {path: 'userList', component : UsuarioComponent, canActivate: [GuardiaoGuard]  },
  {path: 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]  },
  {path: 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]  },
  {path: 'usuarioRelatorio', component: UsuarioRelatorioComponent, canActivate: [GuardiaoGuard]  },
  {path: 'grafico', component: BarChartComponent, canActivate: [GuardiaoGuard]  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters, { relativeLinkResolution: 'legacy' });
export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioRelatorioComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    NgbModule,
    NgxCurrencyModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

