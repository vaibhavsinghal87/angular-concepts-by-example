import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ObservablesComponent } from './observables/observables.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'attributeDirective', component: AttributeDirectiveComponent },
  { path: 'structuralDirective', component: StructuralDirectiveComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'componentInteraction', component: ComponentInteractionComponent },
  { path: 'templateForms', component: TemplateFormsComponent },
  { path: 'changeDetection', component: ChangeDetectionComponent },
  { path: 'httpClient', component: HttpClientComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
