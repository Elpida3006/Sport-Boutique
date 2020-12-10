import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateProductsService {
 
  clothes: Observable<any[]>
 
  // clothes = this.db.collection('clothes').valueChanges({ idField: 'id' });
  // shoes = this.db.collection('shoes').valueChanges({ idField: 'id' });
  // accessory = this.db.collection('accessory').valueChanges({ idField: 'id' });
  constructor(public db: AngularFirestore) { }
// const clothesObj = {
// 
//         }
  createClothes(value) {
    console.log(value);
   return this.db.collection('clothes').add({
    brand: value.brand,
      description: value.description,
       model: value.model,
       imageURL: value.imageURL,
        size: value.size,
        type: value.type,
        price: value.price
    });
}
}
