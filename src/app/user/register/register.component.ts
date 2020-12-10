import { Component, OnInit } from '@angular/core';
// import * as firebase from '@firebase/auth/dist/auth';

import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  error: string;
  loading = false;
  action: 'register' ;
  form: FormGroup;
  email: string;
  password: string;
 

  constructor(
      private router: Router,
      private afAuth: AngularFireAuth,
    public userService: UserService,
    //it's a our authServise
    private fb: FormBuilder
      
  ) { }

  ngOnInit() {
    this.form = this.fb.group({

      email: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+/), Validators.minLength(14)]],
     
    })   
  }
 
    
  
    register() {
      const {email, password} = this.form.value;
      this.userService.register(email, password)
     
        this.email = this.password = '';    

        this.router.navigate([`user/login`])
        alert('your account is created')
    
    
  
 
}
//  get isRegister() {
//       return this.action === 'register';
//   }

  get f() {
    return this.form.controls
  }
}
