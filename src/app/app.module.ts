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


@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    PipeComponent,
    MultiplyPipe,
    ShowFullTextDirective,
    AttributeDirectiveComponent
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
