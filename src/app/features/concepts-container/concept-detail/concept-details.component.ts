import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ConceptsListService } from '../concepts-list/concepts-list.service';

@Component({
  selector: 'app-concept-details',
  templateUrl: './concept-details.component.html',
  styleUrls: ['./concept-details.component.scss']
})
export class ConceptDetailsComponent implements OnInit {

  title: string;

  constructor(private location: Location, private router: ActivatedRoute,
    private conceptService: ConceptsListService) { }

  ngOnInit() {
    this.title = this.conceptService.getConceptTitle(this.router.firstChild.routeConfig.path);
  }

  goBackToConceptList() {
    this.location.back();
  }

}
