import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // passing expression to child
  @Input() car: any;
  // passing static value to child
  @Input() name: String;
  // passing function from parent to child
  @Input() cars: Function;
  
  @Output() onDeleteCar = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
    console.log(this.cars);
  }

  deleteCar(car) {
    this.onDeleteCar.emit(car);
  }

}
