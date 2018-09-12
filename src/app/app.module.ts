import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './concepts/two-way-binding/two-way-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { PipeComponent } from './concepts/pipe/pipe.component';
import { MultiplyPipe } from './shared/pipes/multiply.pipe';
import { ShowFullTextDirective } from './shared/directives/show-full-text.directive';
import { AttributeDirectiveComponent } from './concepts/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './concepts/structural-directive/structural-directive.component';
import { ObservablesComponent } from './concepts/observables/observables.component';
import { ComponentInteractionComponent } from './concepts/component-interaction/component-interaction.component';
import { ChildComponent } from './concepts/component-interaction/child/child.component';
import { TemplateFormsComponent } from './concepts/template-forms/template-forms.component';
import { ChangeDetectionComponent } from './concepts/change-detection/change-detection.component';
import { ChangeDetectionOnPushComponent } from './concepts/change-detection/change-detection-on-push/change-detection-on-push.component';
import { ChangeDetectionDefaultComponent } from './concepts/change-detection/change-detection-default/change-detection-default.component';
import { HttpClientComponent } from './concepts/http-client/http-client.component';
import { ContentProjectionComponent } from './concepts/content-projection/content-projection.component';
import { ContentProjectionUsageComponent } from './concepts/content-projection/content-projection-usage.component';
import { TemplateVariablesComponent } from './concepts/template-variables/template-variables.component';
import { KeypointsComponent } from './shared/components/keypoints/keypoints.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { ViewChildComponent } from './concepts/view-child/view-child.component';
import { ResetCounterComponent } from './shared/components/reset-counter/reset-counter.component';
import { ViewChildrenComponent } from './concepts/view-children/view-children.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    ViewChildrenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
