import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-listener-binding',
  templateUrl: './host-listener-binding.component.html',
  styleUrls: ['./host-listener-binding.component.css']
})
export class HostListenerBindingComponent implements OnInit {

  @HostBinding('style.color') color: string;

  @HostListener('click') onMouseEnter() {
    console.log('component click handler')
    this.color = "gold";
  };

  @HostListener('window:click') onClick() {
    console.log('window click handler')
  };

  constructor() { }

  ngOnInit() {
  }

}
