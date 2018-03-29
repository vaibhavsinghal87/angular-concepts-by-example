import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

const routes: Routes = [
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'attributeDirective', component: AttributeDirectiveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
