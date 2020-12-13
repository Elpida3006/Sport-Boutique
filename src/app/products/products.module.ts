import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessoryComponent } from './accessory/accessory.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ClothesComponent } from './clothes/clothes.component';
import { PromotionComponent } from './promotion/promotion.component';

import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { EditClotheComponent } from './edit-clothe/edit-clothe.component';
import { EditPromotionComponent } from './edit-promotion/edit-promotion.component';
import { EditShoesComponent } from './edit-shoes/edit-shoes.component';
import { EditAccessoryComponent } from './edit-accessory/edit-accessory.component';





@NgModule({
  declarations: [AccessoryComponent, ShoesComponent, ClothesComponent, PromotionComponent, EditClotheComponent, EditPromotionComponent, EditShoesComponent, EditAccessoryComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    ProductsRoutingModule,
    RouterModule
  ], 
  providers: [
ProductsService,

  ],
  exports: [
    
    AccessoryComponent,
    ShoesComponent,
    ClothesComponent, 
    PromotionComponent
  ]
})
export class ProductsModule { }
