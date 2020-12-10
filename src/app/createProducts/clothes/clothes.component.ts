import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductsService } from '../create-products.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  form: FormGroup;
  brand: string;
   description: string;
    model: string; 
    imageURL: string;
     size: string;
     type: string;
  constructor(
    private router: Router,
    public createProductService: CreateProductsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({   })  
  }
  createClothes() {
const {brand, description, model, type, imageURL, size} = this.form.value;



this.router.navigate([`products/clothes`])
  }


}