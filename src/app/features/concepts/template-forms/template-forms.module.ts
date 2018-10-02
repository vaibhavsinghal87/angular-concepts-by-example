import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { TemplateFormsRoutingModule } from './template-forms-routing.module';

import { TemplateFormsComponent } from './template-forms.component';

@NgModule({
  imports: [
    SharedModule,
    TemplateFormsRoutingModule
  ],
  declarations: [
    TemplateFormsComponent
  ],
  exports: [
  ]
})
export class TemplateFormsModule { }
