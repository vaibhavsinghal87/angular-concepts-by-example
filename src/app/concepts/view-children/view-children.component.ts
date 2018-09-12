import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ShowFullTextDirective } from '../../shared/directives/show-full-text.directive';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit {

  // accessing DOM element
  @ViewChildren('p') paragraphs: QueryList<any>;
  // accessing component/directive instance
  @ViewChildren(ShowFullTextDirective) directiveList: QueryList<ShowFullTextDirective>;
  // accessing component/directive as DOM element
  @ViewChildren(ShowFullTextDirective, { read: ElementRef }) elemList: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('######################Accessing DOM elements######################');
    this.paragraphs.forEach(p => console.log(p));

    console.log('######################Accessing Components/Directives Instance######################');
    this.directiveList.forEach(item => console.log(item));

    console.log('######################Accessing Components/Directives as DOM element######################');
    this.elemList.forEach(item => console.log(item));
  }

}
