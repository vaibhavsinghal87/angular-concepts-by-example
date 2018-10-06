import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss']
})
export class ViewSwitcherComponent implements OnInit {

  selected: string = "list";

  @Output() layoutChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  viewChanged(layout) {
    this.layoutChanged.emit(layout);
  }

}
