import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetCounterComponent } from './reset-counter.component';

describe('ResetCounterComponent', () => {
  let component: ResetCounterComponent;
  let fixture: ComponentFixture<ResetCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
