import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './features/concepts/two-way-binding/two-way-binding.component';
import { PipeComponent } from './features/concepts/pipe/pipe.component';
import { AttributeDirectiveComponent } from './features/concepts/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './features/concepts/structural-directive/structural-directive.component';
import { ObservablesComponent } from './features/concepts/observables/observables.component';
import { ComponentInteractionComponent } from './features/concepts/component-interaction/component-interaction.component';
import { TemplateFormsComponent } from './features/concepts/template-forms/template-forms.component';
import { ChangeDetectionComponent } from './features/concepts/change-detection/change-detection.component';
import { HttpClientComponent } from './features/concepts/http-client/http-client.component';
import { ContentProjectionUsageComponent } from './features/concepts/content-projection/content-projection-usage.component';
import { TemplateVariablesComponent } from './features/concepts/template-variables/template-variables.component';
import { ViewChildComponent } from './features/concepts/view-child/view-child.component';
import { ViewChildrenComponent } from './features/concepts/view-children/view-children.component';

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
