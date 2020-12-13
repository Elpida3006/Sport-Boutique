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
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.css']
})
export class AccessoryComponent implements OnInit {
  isAdmin: boolean = false;

  accessory: Observable<any>
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
  constructor(
    public firebaseService: ProductsService,
    public db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
      title: Title,
    public userService: UserService,
  ) { }

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
   this.accessory = this.firebaseService.getAccessories()
   .snapshotChanges()
   .pipe(
     map(actions => actions.map(a => {
       const data = a.payload.doc.data() 
       const id = a.payload.doc.id;
      
       return {data, id} 
           }))

   )}
    deleteAccessory = (event, id) =>  {
      this.firebaseService.deleteAccessories(id)
      .then((res) => {
          this.router.navigate(['products/accessory'])
      })
      .catch((err) => 
          console.log(`Don't delete id`))
  
    }

    editAccessory = (event, itemEdit) => {
     
    // const itemEdit = id;
      this.firebaseService.editAccessories(itemEdit)
      console.log(itemEdit)
      this.editState = true;
     
     
    }
    noEdit = (event, id) => {
      this.editState = false;
    }
    updateAccessory= (event, id) => {
      console.log(id)
      const { brand, description, model, type, imageURL, size, price} = this.form.value 
        this.firebaseService.updateAccessories(id, { brand, description, model, type, imageURL, size, price} )
          .then((res) => {
          this.router.navigate([`products/accessory`])
      this.editState = false;
      })
    }

    buyAccessory = (event, id) => {
//da go wzema id ot item-a i da redirektna kym buy stranica
this.router.navigate(['buy'])
    }
    top() {
      this.router.navigate([`home`])
    }
  }
  


