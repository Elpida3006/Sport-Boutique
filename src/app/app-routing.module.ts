import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CoverComponent } from './cover/cover.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component'
const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: CoverComponent
  },
  {
    path: 'home', 
    component: HomeComponent, 
    data: {
      title: 'HOME'
    }

  },
  {
    path: 'cover', 
    component: CoverComponent,
  data: {
    title: 'COVER'
  }

  }, 
  {
    path: 'contact', 
    component: ContactComponent, 
    data: {
      title: 'CONTACT'
    }

  },
  {
    path: 'about', 
    component: AboutComponent, 
    data: {
      title: 'ABOUT'
    }

  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {enableTracing:true});

