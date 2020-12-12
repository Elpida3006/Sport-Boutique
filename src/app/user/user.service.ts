import { Injectable } from '@angular/core';
import { PlatformStorageService } from '../core/platform-storage.service';
import { Observable, of } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from '@firebase/auth/dist/auth';
// import { Router } from  "@angular/router";
// import auth from "../../../node_modules/firebase"

// import { User } from  'firebase';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>;

  isLogged = false;
isAdmin = false;
  constructor(private firebaseAuth: AngularFireAuth,  private storage: PlatformStorageService) {
    this.user = firebaseAuth.authState;

    this.isLogged = this.storage.getItem('isLogged');
    this.isAdmin = this.storage.getItem('isAdmin');
  }

  register(email: string, password: string) {

     
      this.firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(res => {
       
      console.log('congratulations!!!');
      }) .catch(err => {
     
      console.log(`you do not have registration`)
     
  });
}

  login(email: string, password: string) {
    if ( email === `nadq1234@abv.bg`&& password === 'nadq1234nadq1234') {
      this.isAdmin = true;
    }
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
      
        console.log('Nice, it worked!');
        // isLogged = true;
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
 

  logout() {
    this.firebaseAuth.signOut();
  }

} 
// get isRegister() {
//     return this.isRegister
//   }
// }


