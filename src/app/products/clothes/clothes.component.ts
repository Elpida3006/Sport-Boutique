import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import { Title } from '@angular/platform-browser';
// import {Product} from '../products.service'

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  isAdmin: boolean = false;
  clothes: Observable<any>
  editState: boolean = false;
  // clothes: Observable<Product[]>


  form: FormGroup;
  isLoading = false;
  error: string;

  brand: string;
  description: string;
  model: string; 
  imageURL: string;
  size: string;
  type: string;
  price: string;
  constructor( 
    public firebaseService: ProductsService,
    public db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
      title: Title,
    public userService: UserService,
   
  ) {
   }
  ngOnInit() { 

    this.isAdmin = this.userService.admin;
    this.form = this.fb.group({ 
      brand : [''],
      description : [''],
      model : [''],
      imageURL : [''],
      size : [''],
      type : [''],
      price: ['']
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
 
    editClothe = (event, id) => {
      // console.log(id);
      this.editState = true;
      const clothe = this.firebaseService.editClothes(id).ref.get().then((doc) => {
        if(doc.exists) {
         const currentClothe = doc.data();
          this.form.patchValue(currentClothe) 
        }

      })
     
          
    }

  
    // updateClote= (event, id) => {
    //   //db.collection("users").doc(doc.id).update({foo: "bar"});
    //   console.log(id)
    //   const { brand, description, model, type, imageURL, size, price} = this.form.value 
    //     this.firebaseService.updateClothes(id, { brand, description, model, type, imageURL, size, price} )          .then((res) => {
    //       this.router.navigate([`products/clothes`])
    //   this.editState = false;
    //   })
    // }

    buyClothe = (event, id) => {
this.router.navigate(['buy'])
    }
    top() {
      this.router.navigate([`home`])
    }
  }
  

