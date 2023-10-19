import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { ICategoria } from '../../interfaces/ICategoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias: ICategoria[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.categorias = [
      {
        fecha_creacion: 'Cargando..',
        nombre_categoria: 'Cargando..',
      },
    ];
  }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe((cats) => {
      this.categorias = [];
      cats.forEach((catElement: any) => {
        this.categorias.push({
          id: catElement.id,
          fecha_creacion: catElement.txtFechaCreacion,
          nombre_categoria: catElement.txtNombreCategoria,
        });
      });
    });
  }

  eliminarCategoria(id: string) {
    this.categoriaService
      .eliminarCategoria(id)
      .then(() => {
        console.log('sucess');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
