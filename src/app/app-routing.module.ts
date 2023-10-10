import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FormGastosComponent } from './components/form-gastos/form-gastos.component';
import { FormCategoriasComponent } from './components/form-categorias/form-categorias.component';

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
