import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'backToTopButtonAnimation', [
        transition(':enter', [
          style({ transform: 'translateY(-100%)', opacity: 0 }),
          animate('150ms', style({ transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('150ms', style({ transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class AppComponent {
  title = 'myWebsite';
  showBackToTopButton: boolean = false;
  opened: boolean;

  @HostListener('window:scroll', ['$event.target']) onscroll(event: Document) {
    this.onScroll(event.documentElement.scrollTop);
  };

  constructor() { }

  onScroll(scrollTop) {
    if (scrollTop) {
      if (scrollTop >= 80) {
        this.showBackToTopButton = true;
      } else {
        this.showBackToTopButton = false;
      }
    }
  }

}
