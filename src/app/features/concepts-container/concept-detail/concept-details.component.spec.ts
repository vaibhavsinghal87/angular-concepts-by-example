import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptDetailsComponent } from './concept-details.component';

describe('ConceptDetailsComponent', () => {
  let component: ConceptDetailsComponent;
  let fixture: ComponentFixture<ConceptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
