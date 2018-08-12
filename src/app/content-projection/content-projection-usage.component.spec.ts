import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionUsageComponent } from './content-projection-usage.component';

describe('ContentProjectionUsageComponent', () => {
  let component: ContentProjectionUsageComponent;
  let fixture: ComponentFixture<ContentProjectionUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectionUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
