import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductsService } from '../create-products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  error: string;

  brand: string;
   description: string;
    model: string; 
    imageURL: string;
     size: string;
     type:string;
  
  constructor(
     private router: Router,
    public createProductService: CreateProductsService,
    private fb: FormBuilder, 
    public db: AngularFirestore) { }

  ngOnInit()  {
    this.form = this.fb.group({ 
      brand : [''],
      description : [''],
      model : [''],
      imageURL : [''],
      size : [''],
      type : [''],
      price: ['']
      })  
  }
  onSubmit() {
   
    const {id, brand, description, model, type, imageURL, size, price} = this.form.value;
    this.createProductService.createShoes({id, brand, description, model, type, imageURL, size, price})
    .then(
      (res) => {
        // this.resetFields();
        this.router.navigate([`products/shoes`]) 
       })
    
      } 

}
  
