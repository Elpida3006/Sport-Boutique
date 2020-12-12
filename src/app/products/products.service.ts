import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // clothe: Observable<any>
  productCollection: AngularFirestoreCollection<Product>
    constructor(public db: AngularFirestore) { }

  getClothes(){
    return this.db.collection('clothes');
  }
  deleteClothes(id){
  // console.log(id);

   return this.db.collection('clothes').doc(id).delete();
  }
  editClothes(id) {
    return this.db.collection('clothes')
  }
  updateClothes(id) {
    return this.db.collection('clothes').doc(id).update(id)

  }
}  
export interface Product {
  id?:string;
  title?:string;
  description?:string;
}

 
