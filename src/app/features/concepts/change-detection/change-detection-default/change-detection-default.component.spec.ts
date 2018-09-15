import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionDefaultComponent } from './change-detection-default.component';

describe('ChangeDetectionDefaultComponent', () => {
  let component: ChangeDetectionDefaultComponent;
  let fixture: ComponentFixture<ChangeDetectionDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
