import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(public db: AngularFirestore) { }

  getClothes(){
    return this.db.collection('clothes');
  }
}  

 
