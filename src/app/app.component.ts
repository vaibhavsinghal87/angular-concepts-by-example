import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular concepts by Examples';

  conceptsArr = [
    { name: 'Two Way Binding', id: 'twoWayBinding'},
    { name: 'Unidirectional data flow', id: 'unidirectionalDataFlow'},
    { name: 'Pipes', id: 'pipe'},
    { name: 'Attribute Directive', id: 'attributeDirective'},
    { name: 'Component Interaction', id: 'componentInteraction'}
  ];
}