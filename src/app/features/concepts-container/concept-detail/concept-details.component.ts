import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-concept-details',
  templateUrl: './concept-details.component.html',
  styleUrls: ['./concept-details.component.css']
})
export class ConceptDetailsComponent implements OnInit {

  title: String;

  constructor(private location: Location, private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.firstChild);
  }

  goBackToConceptList() {
    this.location.back();
  }

}
