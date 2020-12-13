import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  clothes: Observable<any>
   
  constructor(public db: AngularFirestore) { }

  getClothes(){
    return this.db.collection('clothes');
  }
  deleteClothes(id){
  // console.log(id);

   return this.db.collection('clothes').doc(id).delete();
  }
  editClothes(id) {
    return this.db.collection('clothes').doc(id)
  }
  updateClothes(id, data) {
    return this.db.collection('clothes').doc(id).set({ ...data} )

  }

  getShoes(){
    return this.db.collection('shoes');
  }
  deleteShoes(id){
  // console.log(id);

   return this.db.collection('shoes').doc(id).delete();
  }

  editShoes(id) {
    return this.db.collection('shoes').doc(id)
  }
  updateShoes(id, data) {
    return this.db.collection('shoes').doc(id).set({ ...data} )

  }


  getPromotions(){
    return this.db.collection('promotion');
  }
  deletePromotions(id){
  // console.log(id);

   return this.db.collection('promotion').doc(id).delete();
  }

  editPromotions(id){
    return this.db.collection('promotion').doc(id)
  }
 

updatePromotons(id, data){
  return this.db.collection('promotion').doc(id).set({ ...data} )

}

  getAccessories(){
    return this.db.collection('accessory');
  }
  deleteAccessories(id){
  // console.log(id);

   return this.db.collection('accessory').doc(id).delete();
  }
  editAccessories(id) {
    return this.db.collection('accessory').doc(id)
  }
  updateAccessories(id, data) {
    return this.db.collection('accessory').doc(id).update({...data} )

  }

  
  
}