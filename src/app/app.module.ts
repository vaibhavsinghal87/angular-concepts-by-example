import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './features/concepts/two-way-binding/two-way-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { PipeComponent } from './features/concepts/pipe/pipe.component';
import { MultiplyPipe } from './shared/pipes/multiply.pipe';
import { ShowFullTextDirective } from './shared/directives/show-full-text.directive';
import { AttributeDirectiveComponent } from './features/concepts/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './features/concepts/structural-directive/structural-directive.component';
import { ObservablesComponent } from './features/concepts/observables/observables.component';
import { ComponentInteractionComponent } from './features/concepts/component-interaction/component-interaction.component';
import { ChildComponent } from './features/concepts/component-interaction/child/child.component';
import { TemplateFormsComponent } from './features/concepts/template-forms/template-forms.component';
import { ChangeDetectionComponent } from './features/concepts/change-detection/change-detection.component';
import { ChangeDetectionOnPushComponent } from './features/concepts/change-detection/change-detection-on-push/change-detection-on-push.component';
import { ChangeDetectionDefaultComponent } from './features/concepts/change-detection/change-detection-default/change-detection-default.component';
import { HttpClientComponent } from './features/concepts/http-client/http-client.component';
import { ContentProjectionComponent } from './features/concepts/content-projection/content-projection.component';
import { ContentProjectionUsageComponent } from './features/concepts/content-projection/content-projection-usage.component';
import { TemplateVariablesComponent } from './features/concepts/template-variables/template-variables.component';
import { KeypointsComponent } from './shared/components/keypoints/keypoints.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { ViewChildComponent } from './features/concepts/view-child/view-child.component';
import { ResetCounterComponent } from './shared/components/reset-counter/reset-counter.component';
import { ViewChildrenComponent } from './features/concepts/view-children/view-children.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { ConceptsContainerModule } from './features/concepts-container/concepts-container.module';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    PipeComponent,
    MultiplyPipe,
    ShowFullTextDirective,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    ObservablesComponent,
    ComponentInteractionComponent,
    ChildComponent,
    TemplateFormsComponent,
    ChangeDetectionComponent,
    ChangeDetectionOnPushComponent,
    ChangeDetectionDefaultComponent,
    HttpClientComponent,
    ContentProjectionComponent,
    ContentProjectionUsageComponent,
    TemplateVariablesComponent,
    KeypointsComponent,
    CounterComponent,
    ViewChildComponent,
    ResetCounterComponent,
    ViewChildrenComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConceptsContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
