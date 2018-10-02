import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { ViewChildrenRoutingModule } from './view-children-routing.module';

import { ViewChildrenComponent } from './view-children.component';

@NgModule({
  imports: [
    ViewChildrenRoutingModule,
    SharedModule
  ],
  declarations: [
    ViewChildrenComponent
  ],
  exports: [
  ]
})
export class ViewChildrenModule { }
