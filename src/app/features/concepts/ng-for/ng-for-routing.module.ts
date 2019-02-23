import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgForComponent } from './ng-for.component';

const routes: Routes = [
  { path: '', component: NgForComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgForRoutingModule { }
