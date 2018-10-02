import { NgModule } from '@angular/core';

import { ObservablesRoutingModule } from './observables-routing.module';

import { ObservablesComponent } from './observables.component';

@NgModule({
  imports: [
    ObservablesRoutingModule
  ],
  declarations: [
    ObservablesComponent
  ],
  exports: [
  ]
})
export class ObservablesModule { }
