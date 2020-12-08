import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { emailValidator, rePasswordValidatorFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;
  loading = false;
  action: 'register' ;

  constructor(
      private router: Router,
      private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {

      this.loading = true;
      this.error = null;

      const {
        
          email,
          password,
          rePassword
        
      } = form.value;

      let resp;

      try {

          if (this.isSignUp) {
              resp = await this.afAuth.createUserWithEmailAndPassword(email, password);

              await resp.user.updateProfile(
                  { displayName: `${email} ${password}` }
              );

              form.reset();
          } 
          const uid = resp.user.uid;
                    this.router.navigate([`/home`]);

          // this.router.navigate([`/profile/${uid}`]);

      } catch (error) {
          console.log(error.message);
          this.error = error.message;
      }

      this.loading = false;
  }

 

  get isSignUp() {
      return this.action === 'register';
  }
}

