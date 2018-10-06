import { Component, OnInit } from '@angular/core';
import { ConceptsListService } from './concepts-list.service';

@Component({
  selector: 'app-concepts-container',
  templateUrl: './concepts-container.component.html',
  styleUrls: ['./concepts-container.component.scss']
})
export class ConceptsContainerComponent implements OnInit {

  concepts: Object[];
  filteredConcepts: Object[];

  constructor(private conceptService: ConceptsListService) { }

  ngOnInit() {
    this.concepts = this.filteredConcepts = this.conceptService.getConceptList();
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
