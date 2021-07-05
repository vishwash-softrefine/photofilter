import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  formDatastore: AngularFireList<any> | undefined;
  private dbPath = '/employee';
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private firestore: AngularFireDatabase
  ) {
    this.formDatastore = firestore.list(this.dbPath);
  }
  items: any;

  saveData(eData: any) {
    return this.db.object('employee').set({ eData });
  }
}
