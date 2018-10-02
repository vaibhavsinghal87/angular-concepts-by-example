import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { TemplateVariablesRoutingModule } from './template-variables-routing.module';

import { TemplateVariablesComponent } from './template-variables.component';

@NgModule({
  imports: [
    SharedModule,
    TemplateVariablesRoutingModule
  ],
  declarations: [
    TemplateVariablesComponent
  ],
  exports: [
  ]
})
export class TemplateVariablesModule { }
