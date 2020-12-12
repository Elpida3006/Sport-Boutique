import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  clothes: Observable<any>
  // productCollection: AngularFirestoreCollection<Product>
   
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
  updateClothes(id, ...data) {
    return this.db.collection('clothes').doc(id).set( data )

  }
  getAccessories(){
    return this.db.collection('accessory');
  }
  deleteAccessories(id){
  // console.log(id);

   return this.db.collection('accessory').doc(id).delete();
  }
  editAccessories(id) {
    return this.db.collection('accessory')
  }
  updateAccessories(id, ...data) {
    return this.db.collection('accessory').doc(id).set( data )

  }

}  
// export interface Product {
//   id?:string;
//   title?:string;
//   description?:string;
// }

 
