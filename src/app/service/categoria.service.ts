import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICategoria } from '../interfaces/ICategoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private firebase: AngularFirestore) { }

  guardarCategoria(categoria: ICategoria): Promise <any> {
    return this.firebase.collection('categorias').add(categoria)
  }
}
