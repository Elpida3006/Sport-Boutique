import { RouterModule, Routes } from '@angular/router';
import { AccessoryComponent } from './accessory/accessory.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { Router } from  "@angular/router";
import { PromotionComponent } from './promotion/promotion.component';


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
          },
        
       
      ]
    }
  ];


export const ProductsRoutingModule = RouterModule.forChild(routes);
