import { TestBed } from '@angular/core/testing';

import { ConceptsListService } from './concepts-list.service';

describe('ConceptsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConceptsListService = TestBed.get(ConceptsListService);
    expect(service).toBeTruthy();
  });
});
