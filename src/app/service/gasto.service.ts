import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IGasto } from '../interfaces/IGasto';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GastoService {
  constructor(private firebase: AngularFirestore, private fire: Firestore) {}

  guardarGasto(gasto: IGasto): Promise<any> {
    return this.firebase.collection('gastos').add(gasto);
  }

  obtenerReferenciaCategoria(referenciaForm: string): any {
    return this.firebase.doc(`/categorias/${referenciaForm}`).ref;
  }

  obtenerGasto(id: string): Observable<any> {
    return this.firebase.collection('gastos').doc(id).valueChanges();
  }

  obtenerGastos(): Observable<IGasto[]> {
    const placeRef = collection(this.fire, 'gastos');
    return collectionData(placeRef, { idField: 'id' }) as Observable<IGasto[]>;
  }

  actualizarGasto(id: string, data: any): Promise<any> {
    return this.firebase.collection('gastos').doc(id).update(data);
  }

  eliminarGasto(id: string): Promise<any> {
    return this.firebase.collection('gastos').doc(id).delete();
  }
}
