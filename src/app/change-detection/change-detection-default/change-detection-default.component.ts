import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-default',
  templateUrl: './change-detection-default.component.html',
  styleUrls: ['./change-detection-default.component.css']
})
export class ChangeDetectionDefaultComponent implements OnInit {

  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}
