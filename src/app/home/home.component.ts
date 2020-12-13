import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  isAdmin: boolean = false;

  constructor(
    title: Title,
    public userService: UserService,
    router: Router
  ) {
  }
  ngOnInit() {
       this.isAdmin = this.userService.admin;
  }
}

