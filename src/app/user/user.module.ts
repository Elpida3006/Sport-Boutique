import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-rauting.module';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, 
    UserRoutingModule, 
    RouterModule

  ], 
  providers: [
    UserService
  ], 
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
