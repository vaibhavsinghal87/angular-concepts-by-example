import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './concepts/two-way-binding/two-way-binding.component';
import { PipeComponent } from './concepts/pipe/pipe.component';
import { AttributeDirectiveComponent } from './concepts/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './concepts/structural-directive/structural-directive.component';
import { ObservablesComponent } from './concepts/observables/observables.component';
import { ComponentInteractionComponent } from './concepts/component-interaction/component-interaction.component';
import { TemplateFormsComponent } from './concepts/template-forms/template-forms.component';
import { ChangeDetectionComponent } from './concepts/change-detection/change-detection.component';
import { HttpClientComponent } from './concepts/http-client/http-client.component';
import { ContentProjectionUsageComponent } from './concepts/content-projection/content-projection-usage.component';
import { TemplateVariablesComponent } from './concepts/template-variables/template-variables.component';
import { ViewChildComponent } from './concepts/view-child/view-child.component';
import { ViewChildrenComponent } from './concepts/view-children/view-children.component';

const routes: Routes = [
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'attributeDirective', component: AttributeDirectiveComponent },
  { path: 'structuralDirective', component: StructuralDirectiveComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'componentInteraction', component: ComponentInteractionComponent },
  { path: 'templateForms', component: TemplateFormsComponent },
  { path: 'changeDetection', component: ChangeDetectionComponent },
  { path: 'httpClient', component: HttpClientComponent },
  { path: 'contentProjection', component: ContentProjectionUsageComponent },
  { path: 'templateVariables', component: TemplateVariablesComponent },
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'viewChildren', component: ViewChildrenComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
