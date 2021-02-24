import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.css']
})
export class EditPromotionComponent implements OnInit {
  form: FormGroup;
  promo: any;
  promoId: string;
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
      price: [''],
      percent: ['']
    })  
    this.route.params.subscribe(params => {
      const { id } = params;
      this.promoId = id;
      this.firebaseService.editPromotions(id).ref.get().then((doc) => {
         if(doc.exists) {
          const currentPromo = doc.data();
           this.form.patchValue(currentPromo) 
         }
       })
    })
}

get f() {
  return this.form.controls
}

updatePromo(){
 
     const { brand, percent, description, model, type, imageURL, size, price} = this.form.value 
    this.firebaseService.updatePromotons(this.promoId, 
      { brand, percent, description, model, type, imageURL, size, price} )          .then((res) => {
      this.router.navigate([`products/shoes`])
    })
}
noEdit = (event, id) => {
  this.router.navigate([`products/promotion`])
}

}
