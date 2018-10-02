import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';

import { AttributeDirectiveComponent } from './attribute-directive.component';

@NgModule({
  imports: [
    SharedModule,
    AttributeDirectiveRoutingModule
  ],
  declarations: [
    AttributeDirectiveComponent
  ],
  exports: [
  ]
})
export class AttributeDirectiveModule { }
