import { NgModule } from '@angular/core';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';

import { ContentProjectionComponent } from './content-projection.component';
import { ContentProjectionUsageComponent } from './content-projection-usage.component';

@NgModule({
  imports: [
    ContentProjectionRoutingModule
  ],
  declarations: [
    ContentProjectionComponent,
    ContentProjectionUsageComponent
  ],
  exports: [
  ]
})
export class ContentProjectionModule { }
