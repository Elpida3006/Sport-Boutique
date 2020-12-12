import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  constructor(
    title: Title,
    public userService: UserService,
    router: Router
  ) {}
  
}

