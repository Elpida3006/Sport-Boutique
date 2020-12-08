import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent, 
    HomeComponent, ContactComponent, AboutComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AppRoutingModule, 
    CoreModule, 
    // CoverModule,
    ProductsModule, 
    UserModule,
    HttpClientModule,
  ],

  providers: [
    UserService, 
    ProductsService,
    PlatformStorageService, 
  
    
  ],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent ],
})
export class AppModule { }
