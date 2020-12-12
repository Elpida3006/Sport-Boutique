import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css']
})
export class BuyProductsComponent implements OnInit {

  constructor( title: Title,
    public userService: UserService,
    router: Router) { }

  ngOnInit(): void {
  }
  logoutHandler(): void {
    this.userService.logout();
  
  }
}
