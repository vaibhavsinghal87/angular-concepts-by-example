import { Component, OnInit } from '@angular/core';

import { keypoints } from './template-variables-keypoints';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  greetMessage: String;
  points = keypoints;

  constructor() { }

  ngOnInit() {
  }

  setMessage(str){
    this.greetMessage = 'Hello ' + str;
  }
}
