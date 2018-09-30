import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConceptsComponent } from './search-concepts.component';

describe('SearchConceptsComponent', () => {
  let component: SearchConceptsComponent;
  let fixture: ComponentFixture<SearchConceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
