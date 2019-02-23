import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostListenerBindingComponent } from './host-listener-binding.component';

const routes: Routes = [
  { path: '', component: HostListenerBindingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostListenerBindingRoutingModule { }
  