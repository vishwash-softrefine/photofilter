import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { decrement, increment, reset } from '../ngRX/counter-action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<any> | undefined;

  public formData: Observable<any>[] | undefined;
  formadata: any;
  // data = this.firestore.collection('name').valueChanges({ id: 'id' });
  // dataName = this.firestore.collection('name').valueChanges({});

  @ViewChild('name') name: ElementRef | undefined;
  formDatastore: AngularFireList<any> | undefined;
  private dbPath = '/employee';
  constructor(
    private store: Store<{ counter: any }>,
    private serv: AppService,
    private firestore: AngularFireDatabase
  ) {
    this.formDatastore = firestore.list(this.dbPath);
  }

  ////// variable declare
  imgUrl: any;
  clr1 = 'red';
  clr2 = 'cyan';
  varient = 'overlay';
  deg = '60';
  varientObj = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'lighten',
    'color-dodge',
    'saturation',
    'color',
    'luminosity',
  ];

  ////// variable declare
  ngOnInit(): void {
    this.count$ = this.store.select('counter');
    console.log(this.count$);
    console.log(this.name);
    console.log(
      this.firestore
        .list('employee')
        .snapshotChanges()
        .subscribe((x) => console.log(x))
    );
  }

  getcolorval(val: any) {
    console.log(val);
  }
  getcolorsel(val: any) {
    console.log(val);
  }
  getdegVal(val: any) {
    console.log(val);
  }

  getDataimg(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      console.log(reader);
      reader.onload = (e) => (this.imgUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  // getDataimg(event: any) {
  //   this.imgUrl = console.log('event image', event.target.value);
  //   this.imgUrl = new FileReader();
  // }
  getEmpList() {
    // this.formadata = this.firestore.list('employee').valueChanges();
  }
  getDatafromForm = this.firestore.object('employee');
  saveEmpData(val: any) {
    this.formDatastore?.push(val);
    console.log(val);
  }

  deleteData() {
    this.firestore.list('employee').remove();
  }
  getData() {}

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
