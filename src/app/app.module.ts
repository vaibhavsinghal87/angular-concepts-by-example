import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


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
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
