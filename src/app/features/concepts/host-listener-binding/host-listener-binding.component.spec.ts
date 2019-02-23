import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerBindingComponent } from './host-listener-binding.component';

describe('HostListenerBindingComponent', () => {
  let component: HostListenerBindingComponent;
  let fixture: ComponentFixture<HostListenerBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostListenerBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListenerBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
