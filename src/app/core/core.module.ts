import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { storageServiceProvider } from './platform-storage.service';



@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  providers: [
    storageServiceProvider
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ],
})
export class CoreModule { }
