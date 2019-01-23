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
  i = 0;
  text = 'My name is Tristan Anguiano and I am a Software Engineer. Check me out!';
  display = '';
  speed = 100;

  constructor() { }

  ngOnInit() {
    this.typewriter(this);
   }

  onDone($event) {
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

  typewriter(that) {
    const totalLength = that.text.length;
    const currentLength = that.display.length;
    if (currentLength < totalLength) {
      console.log(this.i);
      setTimeout(that.typewriter, that.speed, that);
      that.display += that.text[currentLength];
    }
  }

}
