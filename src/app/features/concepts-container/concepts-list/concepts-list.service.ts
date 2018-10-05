import { Injectable } from '@angular/core';

import { conceptsList } from '../concepts-list';

@Injectable()
export class ConceptsListService {

  conceptList = conceptsList;

  constructor() { }

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

}
