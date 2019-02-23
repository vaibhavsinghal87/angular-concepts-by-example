import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { NgForRoutingModule } from './ng-for-routing.module';
import { NgForComponent } from './ng-for.component';

@NgModule({
  declarations: [NgForComponent],
  imports: [
    SharedModule,
    NgForRoutingModule
  ]
})
export class NgForModule { }
