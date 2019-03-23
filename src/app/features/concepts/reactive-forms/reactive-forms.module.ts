import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';

import { ReactiveFormsComponent } from './reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    SharedModule,
    ReactiveFormsRoutingModule
  ]
})
export class ReactiveFormModule { }
