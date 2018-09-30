import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-concepts',
  templateUrl: './search-concepts.component.html',
  styleUrls: ['./search-concepts.component.scss']
})
export class SearchConceptsComponent implements OnInit {

  searchText: string = "";
  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteSearchText() {
    this.searchText = '';
    this.changed.emit(this.searchText);
  }

  onChange() {
    this.changed.emit(this.searchText);
  }
}
