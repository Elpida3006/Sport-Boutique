import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
// import {Product} from '../products.service'

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes: Observable<any>
  editState: boolean = false;
  // clothes: Observable<Product[]>


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
  ngOnInit() { 
    this.form = this.fb.group({ 
      newBrand : [''],
      newDescription : [''],
      newModel : [''],
      newImageURL : [''],
      newSize : [''],
      newType : [''],
      newPrice: ['']
      })  
   this.clothes = this.firebaseService.getClothes()
   .snapshotChanges()
   .pipe(
     map(actions => actions.map(a => {
       const data = a.payload.doc.data() 
       const id = a.payload.doc.id;
      
       return {data, id} 
           }))

   )}
    deleteClothe = (event, id) =>  {
      this.firebaseService.deleteClothes(id)
      .then((res) => {
          this.router.navigate(['products/clothes'])
      })
      .catch((err) => 
          console.log(`Don't delete id`))
  
    }

    editClothe = (event, itemEdit) => {
      this.editState = true;
    // const itemEdit = id;
      this.firebaseService.editClothes(itemEdit)
     
     
    }
    noEdit = (event, id) => {
      this.editState = false;
    }
    updateClote= (event, id) => {
      const { newBrand, newDescription, newModel, newType, newImageURL, newSize, newPrice} = this.form.value;
        this.firebaseService.updateClothes( { newBrand, newDescription, newModel, newType, newImageURL, newSize, newPrice} )
          .then((res) => {
          this.router.navigate([`products/clothes`])
      this.editState = false;
      })
    }
  }
  

