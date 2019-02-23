import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ConceptsListService } from './concepts-list.service'

@Injectable()
export class ConceptListResolverService implements Resolve<Array<Object>> {

  constructor(private conceptsService: ConceptsListService) {
  }

  resolve() {
    return this.conceptsService.getConceptList();
  }
}
