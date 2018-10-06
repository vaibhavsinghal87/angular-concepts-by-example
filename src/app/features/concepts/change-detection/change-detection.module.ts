import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';

import { ChangeDetectionComponent } from './change-detection.component';
import { ChangeDetectionDefaultComponent } from './change-detection-default/change-detection-default.component';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push/change-detection-on-push.component';

@NgModule({
  imports: [
    SharedModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [
    ChangeDetectionComponent,
    ChangeDetectionDefaultComponent,
    ChangeDetectionOnPushComponent
  ],
  exports: [
  ]
})
export class ChangeDetectionModule { }
