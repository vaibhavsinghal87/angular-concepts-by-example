import { Component, OnInit, ContentChild, AfterContentInit, ElementRef } from '@angular/core';

import { ShowFullTextDirective } from '../../../shared/directives/show-full-text.directive';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  // inject reference to a DOM element
  @ContentChild('elem') elem: ElementRef;
  // inject reference to a Directive
  @ContentChild(ShowFullTextDirective) dirRef: ShowFullTextDirective;


  /* // inject reference to a component
  @ViewChild(CounterComponent) counterComp: CounterComponent;
  // inject DOM reference of a component
  @ViewChild('counter', { read: ElementRef }) counterCompDOMRef: CounterComponent;
 */
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // accessing native DOM element properties
    this.elem.nativeElement.style.color = 'crimson';
    console.log(this.elem);

    // accessing Directive properties
    this.dirRef.changeColor('cyan');
    console.log(this.dirRef);
  }

}
