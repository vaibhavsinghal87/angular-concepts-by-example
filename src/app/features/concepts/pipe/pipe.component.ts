import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  name = 'Vaibhav Singhal';

  value = 5;

  constructor() { }

  ngOnInit() {
  }

}
