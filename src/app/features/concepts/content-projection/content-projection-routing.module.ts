import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentProjectionUsageComponent } from './content-projection-usage.component';

const routes: Routes = [
  { path: '', component: ContentProjectionUsageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentProjectionRoutingModule { }
