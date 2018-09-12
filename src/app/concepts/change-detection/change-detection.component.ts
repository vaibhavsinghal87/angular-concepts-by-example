import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  name = {
    fName: 'Misko',
    lName: 'Hevery'
  };

  user = {
    name: 'Vaibhav Singhal',
    age: 30
  };

  constructor() { }

  ngOnInit() {
  }

  changeObjectPropertiesDefault (){
    this.name.fName = 'Igor';
    this.name.lName = 'Minar';
  }

  changeObjectDefault (){
    this.name = {
      fName: 'Igor',
      lName: 'Minar'
    };
  }

  changeObjectPropertiesOnPush (){
    this.user.name = 'Singhal Vaibhav';
    this.user.age = 31;
  }

  changeObjectOnPush (){
    this.user = {
      name: 'Singhal Vaibhav',
      age: 31
    };
  }

}
