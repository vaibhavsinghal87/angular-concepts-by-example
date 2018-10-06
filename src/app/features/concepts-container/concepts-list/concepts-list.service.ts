import { Injectable } from '@angular/core';

import { conceptsList } from '../concepts-list';

@Injectable()
export class ConceptsListService {

  conceptList = this.sortConceptList(conceptsList);

  constructor() {
    console.log('ConceptsListService is a singleton service. This console gets logged only once.');
  }

  getConceptList(): Object[] {
    return this.conceptList;
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
