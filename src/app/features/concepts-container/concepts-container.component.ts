import { Component, OnInit, Input } from '@angular/core';
import { conceptsList } from './concepts-list';

@Component({
  selector: 'app-concepts-container',
  templateUrl: './concepts-container.component.html',
  styleUrls: ['./concepts-container.component.scss']
})
export class ConceptsContainerComponent implements OnInit {

  concepts = conceptsList;

  constructor() { }

  ngOnInit() {
  }

}
