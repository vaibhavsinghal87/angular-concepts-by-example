import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  val = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.val++;
  }

  reduce() {
    this.val--;
  }

  private decrement() {
    this.val--;
  }

}
