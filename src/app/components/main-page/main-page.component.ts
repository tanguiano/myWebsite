import { Component, OnInit } from '@angular/core';
import {
  trigger,
  useAnimation,
  transition,
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
  text = 'My name is Tristan Anguiano and I am a Software Engineer. Check me out!';
  display = '';
  speed = 50;

  constructor() { }

  ngOnInit() {
    this.typeMainSubheading(this);
  }

  onDone($event) {
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

  typeMainSubheading(that) {
    const totalLength = that.text.length;
    const currentLength = that.display.length;
    if (currentLength < totalLength) {
      setTimeout(that.typeMainSubheading, that.speed, that);
      that.display += that.text[currentLength];
    }
    if (currentLength === totalLength) {
      document.getElementById('cursor').style.display = 'none';
    }
  }

}
