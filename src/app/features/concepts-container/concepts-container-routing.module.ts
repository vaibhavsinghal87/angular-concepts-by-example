import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptsContainerComponent } from './concepts-list/concepts-container.component';
import { ConceptDetailsComponent } from './concept-detail/concept-details.component';

const routes: Routes = [
  { path: '', component: ConceptsContainerComponent },
  {
    path: 'detail', component: ConceptDetailsComponent,
    children: [
      { path: 'twoWayBinding', loadChildren: 'app/features/concepts/two-way-binding/two-way-binding.module#TwoWayBindingModule' },
      { path: 'pipe', loadChildren: 'app/features/concepts/pipe/pipe.module#PipeModule' },
      { path: 'attributeDirective', loadChildren: 'app/features/concepts/attribute-directive/attribute-directive.module#AttributeDirectiveModule' },
      { path: 'structuralDirective', loadChildren: 'app/features/concepts/structural-directive/structural-directive.module#StructuralDirectiveModule' },
      { path: 'observables', loadChildren: 'app/features/concepts/observables/observables.module#ObservablesModule' },
      { path: 'componentInteraction', loadChildren: 'app/features/concepts/component-interaction/component-interaction.module#ComponentInteractionModule' },
      { path: 'templateForms', loadChildren: 'app/features/concepts/template-forms/template-forms.module#TemplateFormsModule' },
      { path: 'changeDetection', loadChildren: 'app/features/concepts/change-detection/change-detection.module#ChangeDetectionModule' },
      { path: 'httpClient', loadChildren: 'app/features/concepts/http-client/http-client.module#HttpClientModule' },
      { path: 'contentProjection', loadChildren: 'app/features/concepts/content-projection/content-projection.module#ContentProjectionModule' },
      { path: 'templateVariables', loadChildren: 'app/features/concepts/template-variables/template-variables.module#TemplateVariablesModule' },
      { path: 'viewChild', loadChildren: 'app/features/concepts/view-child/view-child.module#ViewChildModule' },
      { path: 'viewChildren', loadChildren: 'app/features/concepts/view-children/view-children.module#ViewChildrenModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptsContainerRoutingModule { }
