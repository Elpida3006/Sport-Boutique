import { Injectable } from '@angular/core';
import { PlatformStorageService } from '../core/platform-storage.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged = false;

  constructor(private storage: PlatformStorageService) {
    this.isLogged = this.storage.getItem('isLogged');
  }
// loadusers():Observable<:void>
  login(data: any): Observable<any> {
    this.isLogged = true;
    this.storage.setItem('isLogged', true);
    return of(data).pipe(delay(1000));
  }

  logout(): Observable<any> {
    this.isLogged = false;
    this.storage.setItem('isLogged', false);
    return of(null).pipe(delay(3000));
  }

}

