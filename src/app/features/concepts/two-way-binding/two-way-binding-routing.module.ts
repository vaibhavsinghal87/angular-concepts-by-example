import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding.component';

const routes: Routes = [
  { path: '', component: TwoWayBindingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoWayBindingRoutingModule { }
