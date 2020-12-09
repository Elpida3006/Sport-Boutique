import { RouterModule, Routes } from '@angular/router';
import { AccessoryComponent } from './accessory/accessory.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PromotionComponent } from './promotion/promotion.component';


const routes: Routes = [
    {
      path: 'createProducts',
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
            title: 'create accessory'
          },
        },
        {
          path: 'clothes',
          component: ClothesComponent,
          data: {
            isLogged: false,
            title: 'create clothes'
          }
        },
        {
            path: 'shoes',
            component: ShoesComponent,
            data: {
              isLogged: false,
              title: 'create shoes'
            }
          },
          {
            path: 'promotion',
            component: PromotionComponent,
            data: {
              isLogged: false,
              title: 'create promotion'
            }
          },
        
       
      ]
    }
  ];


export const CreateRautingModule = RouterModule.forChild(routes);
