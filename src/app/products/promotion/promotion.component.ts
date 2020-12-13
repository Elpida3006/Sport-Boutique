import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  isAdmin: boolean = false;

  promotion: Observable<any>
  editState: boolean = false;

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
  percent: string;

  constructor( public firebaseService: ProductsService,
    public db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
      title: Title,
    public userService: UserService,) { }

  ngOnInit(){
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
   this.promotion = this.firebaseService.getPromotions()
   .snapshotChanges()
   .pipe(
     map(actions => actions.map(a => {
       const data = a.payload.doc.data() 
       const id = a.payload.doc.id;
      
       return {data, id} 
           }))

   )}
   deletePromo = (event, id) =>  {
      this.firebaseService.deletePromotions(id)
      .then((res) => {
          this.router.navigate(['products/promotion'])
      })
      .catch((err) => 
          console.log(`Don't delete id`))
  
    }

    editPromo = (event, id) => {
     
       this.editState = true;
      const promo = this.firebaseService.editPromotions(id).ref.get().then((doc) => {
        if(doc.exists) {
         const currentPromo = doc.data();
          this.form.patchValue(currentPromo) 
        }

      })
     
    }
    noEdit = (event, id) => {
      this.editState = false;
    }
   
    

    buyPromotion = (event, id) => {
//da go wzema id ot item-a i da redirektna kym buy stranica
this.router.navigate(['buy'])
    }

    top() {
      this.router.navigate([`home`])
    }
  }
  


