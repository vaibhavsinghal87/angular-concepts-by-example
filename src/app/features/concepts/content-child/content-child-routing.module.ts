import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentChildUsageComponent } from './content-child-usage.component';

const routes: Routes = [
   { path: '', component: ContentChildUsageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentChildRoutingModule { }
