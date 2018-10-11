import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { SafeNavigationOperatorRoutingModule } from './safe-navigation-operator-routing.module';

import { SafeNavigationOperatorComponent } from './safe-navigation-operator.component';

@NgModule({
  imports: [
    SharedModule,
    SafeNavigationOperatorRoutingModule
  ],
  declarations: [SafeNavigationOperatorComponent]
})
export class SafeNavigationOperatorModule { }
