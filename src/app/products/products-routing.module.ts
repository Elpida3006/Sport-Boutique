import { RouterModule, Routes } from '@angular/router';
import { AccessoryComponent } from './accessory/accessory.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { Router } from  "@angular/router";
import { PromotionComponent } from './promotion/promotion.component';
import { EditClotheComponent } from './edit-clothe/edit-clothe.component';


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
            isLogged: false,
            noNavigation: true,
            title: 'view accessory'
          },
        },
        {
          path: 'clothes',
          component: ClothesComponent,
          data: {
            isLogged: false,
            title: 'view clothes'
          }
        },
        {
            path: 'shoes',
            component: ShoesComponent,
            data: {
              isLogged: false,
              title: 'view shoes'
            }
          },
          {
            path: 'promotion',
            component: PromotionComponent,
            data: {
              isLogged: false,
              title: 'view promotion'
            }
          },{
            path: 'edit/:id', 
            component: EditClotheComponent,
            data: {
              isLogged: false,
              title: 'edit clothe'
            }
          }
        
       
      ]
    }
  ];


export const ProductsRoutingModule = RouterModule.forChild(routes);
