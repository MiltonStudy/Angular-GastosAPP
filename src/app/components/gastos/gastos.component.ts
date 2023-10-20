import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../service/gasto.service';
import { IGasto } from '../../interfaces/IGasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  gastos: IGasto[] = [];

  constructor(private gastoService: GastoService) {
    this.gastos = [
      {
        categoria: 'Cargando..',
        concepto: 'Cargando..',
        valor: 0,
        fechaRegistro: 'Cargando..',
        factura: 'Cargando..',
      },
    ];
  }

  ngOnInit(): void {
    this.gastoService.obtenerGastos().subscribe((gastos) => {
      this.gastos = [];
      gastos.forEach((gastoElement: any) => {
        this.gastos.push({
          id: gastoElement.id,
          categoria: gastoElement.categoria,
          concepto: gastoElement.concepto,
          valor: gastoElement.valor,
          fechaRegistro: gastoElement.fechaRegistro,
          factura: gastoElement.factura,
        });
      });
    });
  }

  eliminarGasto(id: string) {
    this.gastoService
      .eliminarGasto(id)
      .then(() => {
        console.log('sucess');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
