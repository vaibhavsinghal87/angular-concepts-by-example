import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styleUrls: ['./change-detection-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
