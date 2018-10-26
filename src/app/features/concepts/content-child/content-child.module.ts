import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { ContentChildRoutingModule } from './content-child-routing.module';
import { ContentChildComponent } from './content-child.component';
import { ContentChildUsageComponent } from './content-child-usage.component';

@NgModule({
  imports: [
    SharedModule,
    ContentChildRoutingModule
  ],
  declarations: [ContentChildComponent, ContentChildUsageComponent]
})
export class ContentChildModule { }
