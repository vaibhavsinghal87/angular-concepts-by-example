import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConceptsContainerComponent } from './concepts-container.component';
import { ConceptsContainerRoutingModule } from './concepts-container-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';
import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';
import { GridLayoutComponent } from './layouts/grid-layout/grid-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConceptsContainerRoutingModule,
    MaterialModule
  ],
  declarations: [
    ConceptsContainerComponent,
    ViewSwitcherComponent,
    CardLayoutComponent,
    GridLayoutComponent
  ],
  exports: [
  ],
})
export class ConceptsContainerModule { }
