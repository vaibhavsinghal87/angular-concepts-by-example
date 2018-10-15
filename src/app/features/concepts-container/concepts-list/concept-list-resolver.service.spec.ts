import { TestBed } from '@angular/core/testing';

import { ConceptListResolverService } from './concept-list-resolver.service';

describe('ConceptListResolverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConceptListResolverService = TestBed.get(ConceptListResolverService);
    expect(service).toBeTruthy();
  });
});
