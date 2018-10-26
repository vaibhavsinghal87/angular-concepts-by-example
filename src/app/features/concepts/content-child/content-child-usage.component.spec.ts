import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildUsageComponent } from './content-child-usage.component';

describe('ContentChildUsageComponent', () => {
  let component: ContentChildUsageComponent;
  let fixture: ComponentFixture<ContentChildUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChildUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
