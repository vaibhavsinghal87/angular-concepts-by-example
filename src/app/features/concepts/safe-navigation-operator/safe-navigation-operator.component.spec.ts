import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeNavigationOperatorComponent } from './safe-navigation-operator.component';

describe('SafeNavigationOperatorComponent', () => {
  let component: SafeNavigationOperatorComponent;
  let fixture: ComponentFixture<SafeNavigationOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeNavigationOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeNavigationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
