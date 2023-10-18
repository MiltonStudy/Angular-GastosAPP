import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { ICategoria } from '../../interfaces/ICategoria';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css'],
})
export class FormCategoriasComponent implements OnInit {
  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    //this.crearCategoria();
  }

  crearCategoria() {
    const categoria: ICategoria = {
      fecha_creacion: '2023-12-12',
      nombre_categoria: 'GASOLINA',
    };
    console.log('antes de firebase');
    this.categoriaService.guardarCategoria(categoria).then(
      () => {
        console.log(categoria);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
