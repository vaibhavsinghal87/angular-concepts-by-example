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
    { name: 'Pipes', id: 'pipe'},
    { name: 'Attribute Directive', id: 'attributeDirective'},
    { name: 'Structural Directive', id: 'structuralDirective'},
    { name: 'Component Interaction', id: 'componentInteraction'},
    { name: 'Observables', id: 'observables' },
    { name: 'Template Forms', id: 'templateForms'},
    { name: 'Reactive Forms', id: 'reactiveForms'},
    { name: 'Change Detection', id: 'changeDetection'},
    { name: 'Http Client', id: 'httpClient'}
  ];
}
