import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AppRoutingModule } from './/app-routing.module';
import { PipeComponent } from './pipe/pipe.component';
import { MultiplyPipe } from './multiply.pipe';
import { ShowFullTextDirective } from './show-full-text.directive';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ObservablesComponent } from './observables/observables.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeDetectionOnPushComponent } from './change-detection/change-detection-on-push/change-detection-on-push.component';
import { ChangeDetectionDefaultComponent } from './change-detection/change-detection-default/change-detection-default.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProjectionUsageComponent } from './content-projection/content-projection-usage.component';


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
    ContentProjectionUsageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
