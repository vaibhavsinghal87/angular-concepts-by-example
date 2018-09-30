import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConceptsContainerRoutingModule } from './concepts-container-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';
import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';
import { GridLayoutComponent } from './layouts/grid-layout/grid-layout.component';
import { ConceptDetailsComponent } from './concept-detail/concept-details.component';
import { TwoWayBindingComponent } from '../concepts/two-way-binding/two-way-binding.component';
import { PipeComponent } from '../concepts/pipe/pipe.component';
import { AttributeDirectiveComponent } from '../concepts/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from '../concepts/structural-directive/structural-directive.component';
import { ObservablesComponent } from '../concepts/observables/observables.component';
import { ComponentInteractionComponent } from '../concepts/component-interaction/component-interaction.component';
import { TemplateFormsComponent } from '../concepts/template-forms/template-forms.component';
import { ChangeDetectionComponent } from '../concepts/change-detection/change-detection.component';
import { ChangeDetectionDefaultComponent } from '../concepts/change-detection/change-detection-default/change-detection-default.component';
import { ChangeDetectionOnPushComponent } from '../concepts/change-detection/change-detection-on-push/change-detection-on-push.component';
import { HttpClientComponent } from '../concepts/http-client/http-client.component';
import { ContentProjectionComponent } from '../concepts/content-projection/content-projection.component';
import { ContentProjectionUsageComponent } from '../concepts/content-projection/content-projection-usage.component';
import { TemplateVariablesComponent } from '../concepts/template-variables/template-variables.component';
import { ViewChildComponent } from '../concepts/view-child/view-child.component';
import { ViewChildrenComponent } from '../concepts/view-children/view-children.component';
import { ConceptsContainerComponent } from './concepts-list/concepts-container.component';
import { ChildComponent } from '../concepts/component-interaction/child/child.component';

import { MultiplyPipe } from '../../shared/pipes/multiply.pipe';
import { ShowFullTextDirective } from '../../shared/directives/show-full-text.directive';
import { KeypointsComponent } from '../../shared/components/keypoints/keypoints.component';
import { CounterComponent } from '../../shared/components/counter/counter.component';
import { ResetCounterComponent } from '../../shared/components/reset-counter/reset-counter.component';
import { SearchConceptsComponent } from './search-concepts/search-concepts.component';
import { ConceptsListService } from './concepts-list/concepts-list.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConceptsContainerRoutingModule,
    MaterialModule
  ],
  declarations: [
    ConceptsContainerComponent,
    ViewSwitcherComponent,
    CardLayoutComponent,
    GridLayoutComponent,
    ConceptDetailsComponent,
    TwoWayBindingComponent,
    PipeComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    ObservablesComponent,
    ComponentInteractionComponent,
    TemplateFormsComponent,
    ChangeDetectionComponent,
    ChangeDetectionDefaultComponent,
    ChangeDetectionOnPushComponent,
    HttpClientComponent,
    ContentProjectionComponent,
    ContentProjectionUsageComponent,
    TemplateVariablesComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    MultiplyPipe,
    ShowFullTextDirective,
    KeypointsComponent,
    CounterComponent,
    ResetCounterComponent,
    ChildComponent,
    SearchConceptsComponent
  ],
  exports: [
  ],
  providers: [ConceptsListService]
})
export class ConceptsContainerModule { }
