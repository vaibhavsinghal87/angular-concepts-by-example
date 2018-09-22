import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-concept-details',
  templateUrl: './concept-details.component.html',
  styleUrls: ['./concept-details.component.css']
})
export class ConceptDetailsComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBackToConceptList() {
    this.location.back();
  }

}
