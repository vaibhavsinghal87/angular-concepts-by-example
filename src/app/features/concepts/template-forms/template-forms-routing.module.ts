import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormsComponent } from './template-forms.component';

const routes: Routes = [
  { path: '', component: TemplateFormsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormsRoutingModule { }
