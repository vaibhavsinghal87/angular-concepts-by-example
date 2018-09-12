import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsComponent } from './template-forms.component';

describe('TemplateFormsComponent', () => {
  let component: TemplateFormsComponent;
  let fixture: ComponentFixture<TemplateFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
