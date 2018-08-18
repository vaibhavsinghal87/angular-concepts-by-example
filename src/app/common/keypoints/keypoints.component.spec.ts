import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypointsComponent } from './keypoints.component';

describe('KeypointsComponent', () => {
  let component: KeypointsComponent;
  let fixture: ComponentFixture<KeypointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
