import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';

import { ComponentInteractionComponent } from './component-interaction.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  imports: [
    SharedModule,
    ComponentInteractionRoutingModule
  ],
  declarations: [
    ComponentInteractionComponent,
    ChildComponent
  ],
  exports: [
  ]
})
export class ComponentInteractionModule { }
