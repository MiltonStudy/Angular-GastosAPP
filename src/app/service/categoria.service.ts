import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICategoria } from '../interfaces/ICategoria';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private firebase: AngularFirestore, private fire: Firestore) { }

  guardarCategoria(categoria: ICategoria): Promise <any> {
    return this.firebase.collection('categorias').add(categoria)
  }

  obtenerCategoria(id: string): Observable<any> {
    return this.firebase.collection('categorias').doc(id).valueChanges();
  }

  obtenerCategorias(): Observable<ICategoria[]> {
    const placeRef = collection(this.fire, 'categorias');
    return collectionData(placeRef, { idField: 'id' }) as Observable<ICategoria[]>;
  }

  actualizarCategoria(id: string, data:any): Promise<any> {
    return this.firebase.collection('categorias').doc(id).update(data);
  }

  eliminarCategoria(id: string): Promise<any> {
    return this.firebase.collection('categorias').doc(id).delete();
  }
}
