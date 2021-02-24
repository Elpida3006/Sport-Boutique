import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-accessory',
  templateUrl: './edit-accessory.component.html',
  styleUrls: ['./edit-accessory.component.css']
})
export class EditAccessoryComponent implements OnInit {
  form: FormGroup;
  acc:any;
  accessoryId:string;

  constructor(private fb: FormBuilder,
     public firebaseService: ProductsService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({ 
      brand : [''],
      description : [''],
      model : [''],
      imageURL : [''],
      size : [''],
      type : [''],
      price: ['']
      })  
      this.route.params.subscribe(params => {
        const { id } = params;
        this.accessoryId = id;
        this.firebaseService.editAccessories(id).ref.get()
        .then((doc) => {
           if(doc.exists) {
            const currentAccessory = doc.data();
             this.form.patchValue(currentAccessory) 
           }
         })
      })
  }

  get f() {
    return this.form.controls
  }

  updateAccessory(){
   
       const { brand, description, model, type, imageURL, size, price} = this.form.value 
      this.firebaseService.updateAccessories(this.accessoryId, { brand, description, model, type, imageURL, size, price} )          .then((res) => {
        this.router.navigate([`products/accessory`])
      })
  }
  noEdit = (event, id) => {
    this.router.navigate([`products/accessory`])
  }
}