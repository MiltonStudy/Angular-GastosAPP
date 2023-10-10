import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  categorias: any = [
    { categoria: 'Servicios Publicos', fechaCreacion: '2023-02-14' },
    { categoria: 'Comidas', fechaCreacion: '2023-09-12' },
    { categoria: 'Fiestas', fechaCreacion: '2023-10-01' },
    { categoria: 'Combustible', fechaCreacion: '2023-10-03' },
    { categoria: 'Suscripciones', fechaCreacion: '2023-04-12' },
  ];
}
