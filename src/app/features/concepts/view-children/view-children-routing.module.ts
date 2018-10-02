import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChildrenComponent } from './view-children.component';

const routes: Routes = [
  { path: '', component: ViewChildrenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildrenRoutingModule { }
