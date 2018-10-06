import { NgModule } from '@angular/core';

import { InjectingSafeContentRoutingModule } from './injecting-safe-content-routing.module';

import { InjectingSafeContentComponent } from './injecting-safe-content.component';

@NgModule({
  imports: [
    InjectingSafeContentRoutingModule
  ],
  declarations: [
    InjectingSafeContentComponent
  ],
  exports: [
  ]
})
export class InjectingSafeContentModule { }
