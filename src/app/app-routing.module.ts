import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FormGastosComponent } from './components/form-gastos/form-gastos.component';
import { FormCategoriasComponent } from './components/form-categorias/form-categorias.component';
import { LoginComponent } from './components/login/login.component';
import { FormCrearUsuarioComponent } from './components/form-crear-usuario/form-crear-usuario.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'gastos',
    component: GastosComponent
  },
  {
    path : 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'form-gastos',
    component: FormGastosComponent
  },
  {
    path: 'form-categorias',
    component: FormCategoriasComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'crear-usuario',
    component: FormCrearUsuarioComponent
  },
  {
    path: '**',
    pathMatch: 'full', redirectTo: 'inicio'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
