import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Here we use the AngularFirestore to get the collection's content directly from the database. Notice that valueChanges returns an observable instead of an array and also that we specify that the id field for the documents in this collection should be called id to match the name we use in the Task interface. The observable returned by valueChanges will emit a collection of tasks any time it changes.//
  clothes = this.store.collection('clothes').valueChanges({ idField: 'id' });
  shoes = this.store.collection('shoes').valueChanges({ idField: 'id' });
  accessory = this.store.collection('accessory').valueChanges({ idField: 'id' });
  title = 'Shop-Butique';
  constructor(private store: AngularFirestore) {}

}
