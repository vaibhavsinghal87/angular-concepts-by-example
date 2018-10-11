import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  name = 'Vaibhav Singhal';

  user: object = {
    fName: 'Vaibhav',
    lName: 'Singhal',
    age: undefined,
    profession: null
  };

  value = 5;

  constructor() { }

  ngOnInit() {
  }

}
