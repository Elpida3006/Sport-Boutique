import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage = '';
  error: string;
  loading = false;
  form: FormGroup;
  action: 'login' ;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
     
      email: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[w+]/), Validators.minLength(14)]],
     
    })   
  }

   onSubmit() {
    const {email, password} = this.form.value;

//     this.loading = true;
//     this.error = null;

//     const {
      
//         email,
//         password,
    
      
//     } = form.value;

//     let resp;

//     try {

       
//             resp = await this.afAuth.signInWithEmailAndPassword(email, password);
        

//         const uid = resp.user.uid;
//                   this.router.navigate([`/home`]);

//         // this.router.navigate([`/profile/${uid}`]);

//     } catch (error) {
//         console.log(error.message);
//         this.error = error.message;
//     }

//     this.loading = false;
// }

// get isLogin() {
//     return this.action === 'login';
// }

   }
   get f() {
    return this.form.controls
  }
}
