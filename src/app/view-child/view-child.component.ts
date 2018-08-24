import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { keypoints } from './view-child-keypoints';
import { CounterComponent } from '../common/counter/counter.component';
import { ShowFullTextDirective } from '../show-full-text.directive';


@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
  providers: []
})
export class ViewChildComponent implements OnInit {

  points = keypoints;

  // inject reference to a component
  @ViewChild(CounterComponent) counterComp: CounterComponent;
  // inject DOM reference of a component
  @ViewChild('counter', {read: ElementRef}) counterCompDOMRef: CounterComponent;
  // inject reference to a DOM element
  @ViewChild('elem') elem: ElementRef;
  // inject reference to a Directive
  @ViewChild(ShowFullTextDirective) dirRef: ShowFullTextDirective;
  
  constructor() {
    // At this point all references will be undefined
    console.log(this.counterComp, this.elem, this.dirRef);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // accessing native DOM element properties
    this.elem.nativeElement.style.color = 'cyan';
    // accessing Directive properties
    this.dirRef.changeColor('cyan');

    console.log(this.counterCompDOMRef);
  }

  increment(){
    this.counterComp.increment();
  }

  reduce(){
    this.counterComp.reduce();
  }

  resetCounter(){
    this.counterComp.val = 0;
  }

}
