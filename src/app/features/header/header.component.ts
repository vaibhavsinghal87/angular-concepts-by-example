import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle = 'Angular Concepts by Examples';
  
  constructor() { }

  ngOnInit() {
  }

}
