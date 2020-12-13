import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  isAdmin: boolean = false;
  shoes: Observable<any>
  editState: boolean = false;
  form: FormGroup;
  isLoading = false;
  error: string;

  brand: string;
  description: string;
  model: string; 
  imageURL: string;
  size: string;
  type: string;
  price: string;
  constructor(public firebaseService: ProductsService,
    public db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
      title: Title,
    public userService: UserService,) { }

  ngOnInit() {
    this.isAdmin = this.userService.admin;
    this.form = this.fb.group({ 
      brand : [''],
      description : [''],
      model : [''],
      imageURL : [''],
      size : [''],
      type : [''],
      price: ['']
    })
    this.shoes = this.firebaseService.getShoes()
   .snapshotChanges()
   .pipe(
     map(actions => actions.map(a => {
       const data = a.payload.doc.data() 
       const id = a.payload.doc.id;
      
       return {data, id} 
           }))

   )}
    deleteShoe = (event, id) =>  {
      this.firebaseService.deleteShoes(id)
      .then((res) => {
          this.router.navigate(['products/shoes'])
      })
      .catch((err) => 
          console.log(`Don't delete id`))
  
    }

    
    buyShoe= (event, id) => {
      this.router.navigate(['buy'])
    }
    top() {
            this.router.navigate([`home`])
          }



         editShoe(){}
  }


