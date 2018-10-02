import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { TwoWayBindingRoutingModule } from './two-way-binding-routing.module';

import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
  imports: [
    SharedModule,
    TwoWayBindingRoutingModule
  ],
  declarations: [
    TwoWayBindingComponent
  ],
  exports: [
  ]
})
export class TwoWayBindingModule { }
