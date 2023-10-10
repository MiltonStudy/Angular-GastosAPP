import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent {
  gastos: any = [
    {
      categoria: 'Fiestas',
      concepto: 'Cervezas',
      valor: '30,000',
      fechaRegistro: '2023-03-24',
      factura:
        'https://designblog.uniandes.edu.co/blogs/dise2619/files/2018/09/Anguelica-Guerrero.jpg',
    },
    {
      categoria: 'Comidas',
      concepto: 'Arroz 500g',
      valor: '12,500',
      fechaRegistro: '2022-12-15',
      factura:
        'https://designblog.uniandes.edu.co/blogs/dise2619/files/2018/09/Anguelica-Guerrero.jpg',
    },
    {
      categoria: 'Combustible',
      concepto: 'Gasolina Carro',
      valor: '50,000',
      fechaRegistro: '2023-04-12',
      factura:
        'https://designblog.uniandes.edu.co/blogs/dise2619/files/2018/09/Anguelica-Guerrero.jpg',
    },
    {
      categoria: 'Comidas',
      concepto: 'Pasta bolognesa',
      valor: '47,300',
      fechaRegistro: '2023-07-12',
      factura:
        'https://designblog.uniandes.edu.co/blogs/dise2619/files/2018/09/Anguelica-Guerrero.jpg',
    },
    {
      categoria: 'Suscripciones',
      concepto: 'Netflix',
      valor: '32,310',
      fechaRegistro: '2022-07-06',
      factura:
        'https://designblog.uniandes.edu.co/blogs/dise2619/files/2018/09/Anguelica-Guerrero.jpg',
    },
    {
      categoria: 'Servicios Publicos',
      concepto: 'Servicio Luz Electrica',
      valor: '37,350',
      fechaRegistro: '2023-01-12',
      factura:
        'https://designblog.uniandes.edu.co/blogs/dise2619/files/2018/09/Anguelica-Guerrero.jpg',
    },
  ];
}
