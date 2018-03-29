import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
  { path: 'pipe', component: PipeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
