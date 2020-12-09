import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoryComponent } from './accessory/accessory.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeComponent } from '../home/home.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { PromotionComponent } from './promotion/promotion.component';



@NgModule({
  declarations: [AccessoryComponent, ShoesComponent, ClothesComponent, PromotionComponent],
  imports: [
    CommonModule, 
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
