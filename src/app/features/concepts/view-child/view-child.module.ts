import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { ViewChildRoutingModule } from './view-child-routing.module';

import { ViewChildComponent } from './view-child.component';

@NgModule({
  imports: [
    SharedModule,
    ViewChildRoutingModule
  ],
  declarations: [
    ViewChildComponent
  ],
  exports: [
  ]
})
export class ViewChildModule { }
