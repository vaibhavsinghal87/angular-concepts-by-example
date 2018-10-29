import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { conceptsList } from '../concepts-list';

import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class ConceptsListService {

  items$: Observable<any[]>;
  conceptList: Object[];
  firebaseConceptList: Object[] = [];

  constructor(private db: AngularFirestore) {
    console.log('ConceptsListService is a singleton service. This console gets logged only once.');

    //Fetch concept list from Firebase DB
    this.items$ = this.db.collection('concepts').valueChanges();
    this.items$.pipe(
      flatMap(val => val)
    ).subscribe(val => this.firebaseConceptList.push(val));
  }

  /**
   * returns concepts from Firebase DB or from local file
   */
  getConceptList(): Object[] {
    this.conceptList = (this.firebaseConceptList.length) ? this.firebaseConceptList : conceptsList;
    return this.sortConceptList(this.conceptList);
  }

  filterConcepts(searchText: string): Object[] {
    return this.conceptList.filter(item => {
      return item['name'].toLowerCase().includes(searchText);
    });
  }

  getConceptTitle(id: string): string {
    let title: object[] = this.conceptList.filter(item => {
      return item['id'] === id;
    });
    return title[0]['name'];
  }

  /**
   * @description This function sorts concepts array by 'name' field.
   */
  sortConceptList(items) {
    items.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return items;
  }
}
