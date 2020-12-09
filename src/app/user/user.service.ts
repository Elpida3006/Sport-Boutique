import { Injectable } from '@angular/core';
import { PlatformStorageService } from '../core/platform-storage.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from '@firebase/auth/dist/auth';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged = false;

  constructor( private storage: PlatformStorageService) {
   
    this.isLogged = this.storage.getItem('isLogged');
  }

  doRegister({email, password}) {
    return new Promise<any>((resolve, rej) => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(res => {
        resolve(res);
      console.log('congratulations!!!');
      }, err => rej(err))
     
  })

  // doLogin()

} 
get isRegister() {
    return this.isRegister
  }
}


