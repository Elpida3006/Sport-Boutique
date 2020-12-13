import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-shoes',
  templateUrl: './edit-shoes.component.html',
  styleUrls: ['./edit-shoes.component.css']
})
export class EditShoesComponent implements OnInit {
  form: FormGroup;
  shoe: any;
  shoeId: string;

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
      this.shoeId = id;
      this.firebaseService.editShoes(id).ref.get().then((doc) => {
         if(doc.exists) {
          const currentShoe = doc.data();
           this.form.patchValue(currentShoe) 
         }
       })
    })
}

get f() {
  return this.form.controls
}

updateShoe(){
 
     const { brand, description, model, type, imageURL, size, price} = this.form.value 
    this.firebaseService.updateShoes(this.shoeId, { brand, description, model, type, imageURL, size, price} )          .then((res) => {
      this.router.navigate([`products/shoes`])
    })
}
noEdit = (event, id) => {
  this.router.navigate([`products/shoes`])
}

}
