import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  arrCars = [
    { make: 'BMW', id: 1 },
    { make: 'Volvo', id: 2 },
    { make: 'Merc', id: 3 },
    { make: 'Land Rover', id: 4 },
    { make: 'Bentley', id: 5 }
  ];

  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    this.arrCars = this.arrCars.filter(
      car => car.id !== item.id
    );
  }

  getCars() {
    return this.arrCars;
  }
}
