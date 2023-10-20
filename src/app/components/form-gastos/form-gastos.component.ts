import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { GastoService } from '../../service/gasto.service';
import { CategoriaService } from '../../service/categoria.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IGasto } from '../../interfaces/IGasto';
import { ICategoria } from '../../interfaces/ICategoria';

@Component({
  selector: 'app-form-gastos',
  templateUrl: './form-gastos.component.html',
  styleUrls: ['./form-gastos.component.css'],
})
export class FormGastosComponent {
  imageURL: any;
  formulario: FormGroup;
  id: string = '';
  gasto: IGasto[] = [];
  datosGasto: IGasto[] = [];
  categorias: ICategoria[] = [];

  constructor(
    private gastoService: GastoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private categoriaService: CategoriaService
  ) {
    this.formulario = this.fb.group({
      categoria: new FormControl(),
      concepto: new FormControl(),
      valor: new FormControl(),
      fechaRegistro: new FormControl(),
      factura: new FormControl(),
    });

    // Obtener ID de la URL
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.rellenarFormularioGastos();
    this.listCategorias();
  }

  onSubmit() {
    this.capturarDatosFormulario();

    if (this.id != undefined) {
      this.modificarGasto(this.id, this.datosGasto);
    } else {
      this.agregarGasto(this.datosGasto);
    }
  }

  capturarDatosFormulario() {
    const categoriaForm = this.formulario.get('categoria')?.value;
    const refCategoria =
      this.gastoService.obtenerReferenciaCategoria(categoriaForm);

    // Datos para guardar en Firestore
    this.datosGasto.push({
      concepto: this.formulario.get('concepto')?.value,
      valor: this.formulario.get('valor')?.value,
      fechaRegistro: this.formulario.get('fechaRegistro')?.value,
      factura: this.formulario.get('factura')?.value,
      categoria: refCategoria,
    });
  }

  agregarGasto(data: any) {
    this.gastoService.guardarGasto(data).then(
      () => {
        console.log('success');
        this.router.navigate(['/gastos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificarGasto(id: string, data: any) {
    this.gastoService.actualizarGasto(id, data).then(
      () => {
        console.log('success');
        this.router.navigate(['/gastos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rellenarFormularioGastos() {
    if (this.id != undefined) {
      this.gastoService.obtenerGasto(this.id).subscribe((gasto) => {
        this.gasto = [];

        this.gasto.push({
          categoria: gasto.categoria,
          concepto: gasto.concepto,
          valor: gasto.valor,
          fechaRegistro: gasto.fechaRegistro,
          factura: gasto.factura,
        });

        this.formulario.get('categoria')?.setValue(this.gasto[0].categoria.id);
        this.formulario.get('concepto')?.setValue(this.gasto[0].concepto);
        this.formulario.get('valor')?.setValue(this.gasto[0].valor);
        this.formulario
          .get('fechaRegistro')
          ?.setValue(this.gasto[0].fechaRegistro);
        this.formulario.get('factura')?.setValue(this.gasto[0].factura);
      });
    }
  }

  listCategorias() {
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

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    let imageUrl = image.webPath;
    this.imageURL = imageUrl;
    this.formulario.get('factura')?.setValue(this.imageURL);
  };
}
