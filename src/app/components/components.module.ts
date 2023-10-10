import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GastosComponent } from './gastos/gastos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormGastosComponent } from './form-gastos/form-gastos.component';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';

@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    GastosComponent,
    CategoriasComponent,
    FormGastosComponent,
    FormCategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    GastosComponent,
    CategoriasComponent,
    FormGastosComponent,
    FormCategoriasComponent
  ]
})
export class ComponentsModule { }
