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
            title: ''
          },
        },
        {
          path: 'clothes',
          component: ClothesComponent,
          data: {
            isLogged: false,
            title: ''
          }
        },
        {
            path: 'shoes',
            component: ShoesComponent,
            data: {
              isLogged: false,
              title: ''
            }
          },
          {
            path: 'promotion',
            component: PromotionComponent,
            data: {
              isLogged: false,
              title: ''
            }
          },
        
       
      ]
    }
  ];


export const ProductsRoutingModule = RouterModule.forChild(routes);
