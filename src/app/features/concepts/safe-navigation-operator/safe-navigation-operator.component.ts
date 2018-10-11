import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-navigation-operator',
  templateUrl: './safe-navigation-operator.component.html',
  styleUrls: ['./safe-navigation-operator.component.css']
})
export class SafeNavigationOperatorComponent implements OnInit {

  user = {
    fName: 'Vaibhav'
  }

  constructor() { }

  ngOnInit() {
  }

}
