import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { PipeRoutingModule } from './pipe-routing.module';

import { PipeComponent } from './pipe.component';


@NgModule({
  imports: [
    SharedModule,
    PipeRoutingModule
  ],
  declarations: [
    PipeComponent
  ],
  exports: [
  ]
})
export class PipeModule { }
