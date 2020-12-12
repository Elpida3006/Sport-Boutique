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
  accessory: Observable<any>
  editState: boolean = false;
  form: FormGroup;
  isLoading = false;
  error: string;
  newBrand : string;
      newDescription :string;
      newModel : string;
      newImageURL : string;
      newSize : string;
      newType : string;
      newPrice: string;
  constructor(
    public firebaseService: ProductsService,
    public db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
      title: Title,
    public userService: UserService,
  ) { }

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
      this.editState = true;
    // const itemEdit = id;
      this.firebaseService.editAccessories(itemEdit)
     
     
    }
    noEdit = (event, id) => {
      this.editState = false;
    }
    updateAccessory= (event, id) => {
      const { newBrand, newDescription, newModel, newType, newImageURL, newSize, newPrice} = this.form.value 
        this.firebaseService.updateAccessories({id,  newBrand, newDescription, newModel, newType, newImageURL, newSize, newPrice} )
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
  


