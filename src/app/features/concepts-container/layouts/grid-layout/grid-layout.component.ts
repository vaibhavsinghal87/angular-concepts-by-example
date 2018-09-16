import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {

  @Input() concepts: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
