import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentInteractionComponent } from './component-interaction.component';

const routes: Routes = [
  { path: '', component: ComponentInteractionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule { }
