import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-keypoints',
  templateUrl: './keypoints.component.html',
  styleUrls: ['./keypoints.component.css']
})
export class KeypointsComponent implements OnInit {

  @Input() points: Array<String>;

  constructor() { }

  ngOnInit() {
  }

}
