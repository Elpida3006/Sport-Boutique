import { Component, OnInit } from '@angular/core';
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
  brand: string;
   description: string;
    model: string; 
    imageURL: string;
     size: string;
     type:string;
  
  constructor(
     private router: Router,
    public createProductService: CreateProductsService,
    private fb: FormBuilder) { }

  ngOnInit()  {
    this.form = this.fb.group({   })  
  }
  createShoes() {
    const {brand, description, model, type, imageURL, size} = this.form.value;


this.router.navigate([`products/shoes`])
  }
}