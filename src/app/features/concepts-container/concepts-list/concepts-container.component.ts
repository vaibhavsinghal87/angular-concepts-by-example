import { Component, OnInit } from '@angular/core';
import { ConceptsListService } from './concepts-list.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concepts-container',
  templateUrl: './concepts-container.component.html',
  styleUrls: ['./concepts-container.component.scss']
})
export class ConceptsContainerComponent implements OnInit {

  concepts: Object[];
  filteredConcepts: Object[];

  constructor(private conceptService: ConceptsListService, private route: ActivatedRoute) { }

  /**
   * Component is initialized again and again
   */
  ngOnInit() {
    console.log(this.route.snapshot.data.concepts);
    this.concepts = this.filteredConcepts = this.route.snapshot.data.concepts;
  }

  searchTextChanged(data: string) {
    if (data && this.concepts) {
      this.filteredConcepts = this.conceptService.filterConcepts(data);
    } else {
      this.filteredConcepts = this.concepts;
    }
  }

  onLayoutChange(data) {
    console.log(data);
  }

}
