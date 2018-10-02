import { NgModule } from '@angular/core';

import { ConceptsContainerRoutingModule } from './concepts-container-routing.module';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';
import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';
import { GridLayoutComponent } from './layouts/grid-layout/grid-layout.component';
import { ConceptDetailsComponent } from './concept-detail/concept-details.component';
import { ConceptsContainerComponent } from './concepts-list/concepts-container.component';

import { SearchConceptsComponent } from './search-concepts/search-concepts.component';
import { ConceptsListService } from './concepts-list/concepts-list.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    ConceptsContainerRoutingModule,
    SharedModule
  ],
  declarations: [
    ConceptsContainerComponent,
    ViewSwitcherComponent,
    CardLayoutComponent,
    GridLayoutComponent,
    ConceptDetailsComponent,
    SearchConceptsComponent
  ],
  exports: [
  ],
  providers: [ConceptsListService]
})
export class ConceptsContainerModule { }
