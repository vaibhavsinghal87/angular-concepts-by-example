import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafeNavigationOperatorComponent } from './safe-navigation-operator.component';

const routes: Routes = [
  { path: '', component: SafeNavigationOperatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafeNavigationOperatorRoutingModule { }
