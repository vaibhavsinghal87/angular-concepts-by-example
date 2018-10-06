import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InjectingSafeContentComponent } from './injecting-safe-content.component';

const routes: Routes = [
  { path: '', component: InjectingSafeContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectingSafeContentRoutingModule { }
