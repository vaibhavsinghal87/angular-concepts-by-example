import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var observable = of(1, 2, 3);
    var observer = {
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    };
    var subscription = observable.subscribe(observer);

    // Subject as observable and observer
    var subject = new Subject();
    // subject are multicast
    subject.subscribe(x => console.log(x));
    subject.subscribe(x => console.log(x));
    // subject can emit data
    subject.next('4');
  }

}
