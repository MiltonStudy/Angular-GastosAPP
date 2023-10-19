import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategoria } from '../../interfaces/ICategoria';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css'],
})
export class FormCategoriasComponent implements OnInit {
  formulario: FormGroup;
  id: string = '';
  categoria: ICategoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formulario = new FormGroup({
      txtNombreCategoria: new FormControl(),
      txtFechaCreacion: new FormControl(),
    });

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id != undefined) {
      this.categoriaService.obtenerCategoria(this.id).subscribe((cat) => {
        this.categoria = [];

        this.categoria.push({
          fecha_creacion: cat.txtFechaCreacion,
          nombre_categoria: cat.txtNombreCategoria,
        });

        this.formulario
          .get('txtNombreCategoria')
          ?.setValue(this.categoria[0].nombre_categoria);
        this.formulario
          .get('txtFechaCreacion')
          ?.setValue(this.categoria[0].fecha_creacion);
      });
    }
  }

  onSubmit() {
    if (this.id != undefined) {
      this.modificarCategoria(this.id, this.formulario.value);
    } else {
      this.agregarCategoria(this.formulario.value);
    }
  }

  agregarCategoria(data: any) {
    this.categoriaService.guardarCategoria(data).then(
      () => {
        console.log('success');
        this.router.navigate(['/categorias']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificarCategoria(id: string, data: any) {
    this.categoriaService.actualizarCategoria(id, data).then(
      () => {
        console.log('success');
        this.router.navigate(['/categorias']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
