import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injecting-safe-content',
  templateUrl: './injecting-safe-content.component.html',
  styleUrls: ['./injecting-safe-content.component.css']
})
export class InjectingSafeContentComponent implements OnInit {

  content: string = `
    The break tags were literally rendered in the browser. Angular did not render the interpolation as
    HTML; instead, it escaped the HTML characters. <br/>
    How to fix it? Easy! Replace the interpolation with the property binding to bind data to the
    element's innerHTML property.`;

  constructor() { }

  ngOnInit() {
  }

}
