import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { HttpClientRoutingModule } from './http-client-routing.module';

import { HttpClientComponent } from './http-client.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientRoutingModule
  ],
  declarations: [
    HttpClientComponent
  ],
  exports: [
  ]
})
export class HttpClientModule { }
