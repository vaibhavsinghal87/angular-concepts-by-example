import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttributeDirectiveComponent } from './attribute-directive.component';

const routes: Routes = [
  { path: '', component: AttributeDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeDirectiveRoutingModule { }
