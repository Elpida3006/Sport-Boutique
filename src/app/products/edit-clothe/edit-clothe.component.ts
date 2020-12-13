import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-clothe',
  templateUrl: './edit-clothe.component.html',
  styleUrls: ['./edit-clothe.component.css']
})

export class EditClotheComponent implements OnInit {
form: FormGroup;
clothe: any;
clotheId: string;
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
        this.clotheId = id;
        this.firebaseService.editClothes(id).ref.get().then((doc) => {
           if(doc.exists) {
            const currentClothe = doc.data();
             this.form.patchValue(currentClothe) 
           }
         })
      })
  }

  get f() {
    return this.form.controls
  }

  updateClote(){
   
       const { brand, description, model, type, imageURL, size, price} = this.form.value 
      this.firebaseService.updateClothes(this.clotheId, { brand, description, model, type, imageURL, size, price} )          .then((res) => {
        this.router.navigate([`products/clothes`])
      })
  }
  noEdit = (event, id) => {
    this.router.navigate([`products/clothes`])
  }
}
