import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionComponent } from './content-projection.component';

describe('ContentProjectionComponent', () => {
  let component: ContentProjectionComponent;
  let fixture: ComponentFixture<ContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
