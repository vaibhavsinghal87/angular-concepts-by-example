import { NgModule } from '@angular/core';

import { HostListenerBindingRoutingModule } from './host-listener-binding-routing.module';

import { HostListenerBindingComponent } from './host-listener-binding.component';

@NgModule({
  declarations: [HostListenerBindingComponent],
  imports: [
    HostListenerBindingRoutingModule
  ]
})
export class HostListenerBindingModule { }
