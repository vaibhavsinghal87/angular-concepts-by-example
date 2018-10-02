import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChildComponent } from './view-child.component';

const routes: Routes = [
  { path: '', component: ViewChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule { }
