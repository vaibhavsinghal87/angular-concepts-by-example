import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsContainerComponent } from './concepts-container.component';

describe('ConceptsContainerComponent', () => {
  let component: ConceptsContainerComponent;
  let fixture: ComponentFixture<ConceptsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
