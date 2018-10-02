import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateVariablesComponent } from './template-variables.component';

const routes: Routes = [
  { path: '', component: TemplateVariablesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateVariablesRoutingModule { }
