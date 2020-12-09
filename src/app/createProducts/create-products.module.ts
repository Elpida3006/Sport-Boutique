import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoryComponent } from './accessory/accessory.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CreateProductsService } from './create-products.service';
import { CreateRautingModule } from './create-rauting.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AccessoryComponent, ClothesComponent, PromotionComponent, ShoesComponent],
  imports: [
    CommonModule, 
    CreateRautingModule, 
    RouterModule, 
    ReactiveFormsModule
  ], 
  providers: [
    CreateProductsService
  ], 
  exports: [
    AccessoryComponent, 
    ClothesComponent, 
    PromotionComponent, 
    ShoesComponent
  ]
})
export class CreateProductsModule { }
