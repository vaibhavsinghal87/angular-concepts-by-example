import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';

import { StructuralDirectiveComponent } from './structural-directive.component';

@NgModule({
  imports: [
    SharedModule,
    StructuralDirectiveRoutingModule
  ],
  declarations: [
    StructuralDirectiveComponent
  ],
  exports: [
  ]
})
export class StructuralDirectiveModule { }
