import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  angularVersions:String[] = [
    'AngularJS',
    'Angular 2',
    'Angular 4',
    'Angular 5',
    'Angular 6'
  ];

  constructor() { }

  ngOnInit() {
  }

}
