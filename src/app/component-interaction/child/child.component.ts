import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() car: any;
  @Output() onDeleteCar = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  deleteCar(car) {
    this.onDeleteCar.emit(car);
  }

}
