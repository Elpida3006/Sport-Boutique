import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes: Observable<any>; 

  form: FormGroup;
  isLoading = false;
  error: string;

  constructor( 
    public firebaseService: ProductsService,
    public db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
  ) {
   }

  ngOnInit()
  { 
   this.clothes = this.firebaseService.getClothes()
   .snapshotChanges()
   .pipe(
     map(actions => actions.map(a => {
       const data = a.payload.doc.data();
       return data
           }))
   )
    }
  }
  

