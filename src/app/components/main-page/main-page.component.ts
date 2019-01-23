import { Component, OnInit } from '@angular/core';
import {
  trigger,
  useAnimation,
  transition,
  state,
  style,
  animate
} from '@angular/animations';
import { bounce } from 'ng-animate';

export const fade = trigger('fade', [transition('* <=> *', useAnimation(bounce))]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [fade],
})

export class MainPageComponent implements OnInit {

  times = 100;
  counter = 0;
  state: any = 'active';

  constructor() { }

  ngOnInit() { }

  onDone($event) {
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

}
