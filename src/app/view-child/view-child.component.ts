import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../common/counter/counter.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  val: Number = 0;
  @ViewChild(CounterComponent) private counterComp: CounterComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.counterComp);
  }

  ngAfterViewInit() {
    console.log(this.counterComp);
  }

  increment(){
    this.counterComp.increment();
    this.val = this.counterComp.val;
  }

  reduce(){
    this.counterComp.reduce();
    this.val = this.counterComp.val;
  }

}
