import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectingSafeContentComponent } from './injecting-safe-content.component';

describe('InjectingSafeContentComponent', () => {
  let component: InjectingSafeContentComponent;
  let fixture: ComponentFixture<InjectingSafeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectingSafeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectingSafeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
