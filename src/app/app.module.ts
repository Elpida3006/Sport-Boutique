import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule ,AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';

import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ProductsService } from './products/products.service';
import { PlatformStorageService } from './core/platform-storage.service';
import {HttpClientModule} from '@angular/common/http'
// import { CoverModule } from './cover/cover.module';
import { CoverComponent } from './cover/cover.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CreateProductsModule } from './createProducts/create-products.module';
import { CreateProductsService } from './createProducts/create-products.service';
import { BuyProductsComponent } from './buy-products/buy-products.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent, 
    HomeComponent, ContactComponent, AboutComponent, BuyProductsComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    // AngularFireMessagingModule,
    // AngularFireStorageModule,
    AppRoutingModule, 
    CoreModule, 
    // CoverModule,
    ProductsModule, 
    UserModule,
    HttpClientModule,
    CreateProductsModule
  ],

  providers: [
    UserService, 
    ProductsService,
    PlatformStorageService, 
    CreateProductsService, 
    AngularFirestore, 
    // {provide: StorageBucket}
    
  ],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent ],
})
export class AppModule { }
