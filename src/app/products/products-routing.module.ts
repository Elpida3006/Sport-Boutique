import { RouterModule, Routes } from '@angular/router';
import { AccessoryComponent } from './accessory/accessory.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { Router } from  "@angular/router";
import { PromotionComponent } from './promotion/promotion.component';
import { EditClotheComponent } from './edit-clothe/edit-clothe.component';
import { EditPromotionComponent } from './edit-promotion/edit-promotion.component';
import { EditAccessoryComponent } from './edit-accessory/edit-accessory.component';
import { EditShoesComponent } from './edit-shoes/edit-shoes.component';


const routes: Routes = [
    {
      path: 'products',
    //   canActivateChild: [
    //     AuthGuard
    //   ],
      children: [
        {
          path: 'accessory',
          component: AccessoryComponent,
          data: {
            isLogged: true,
            noNavigation: true,
            title: 'view accessory'
          },
        },
        {
          path: 'clothes',
          component: ClothesComponent,
          data: {
            isLogged: true,
            title: 'view clothes'
          }
        },
        {
            path: 'shoes',
            component: ShoesComponent,
            data: {
              isLogged: true,
              title: 'view shoes'
            }
          },
          {
            path: 'promotion',
            component: PromotionComponent,
            data: {
              // isLogged: false,
              title: 'view promotion'
            }
          },{
            path: 'edit/:id', 
            component: EditClotheComponent,
            data: {
              // isLogged: false,
              title: 'edit clothe'
            }
          }, {
            path: 'editPromo/:id', 
            component: EditPromotionComponent,
            data: {
              // isLogged: false,
              title: 'edit promotion'
            }
          }, {
            path: 'editAcc/:id', 
            component: EditAccessoryComponent,
            data: {
              // isLogged: false,
              title: 'edit accessory'
            }
          }, {
            path: 'editShoes/:id', 
            component: EditShoesComponent,
            data: {
              // isLogged: false,
              title: 'edit shoe'
            }
          }
        
       
      ]
    }
  ];


export const ProductsRoutingModule = RouterModule.forChild(routes);
