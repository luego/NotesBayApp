import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class Tab1Page {

  public currentSegment = 'notes';

  options = {
    centeredSlides: false,
    slidesPerView: 2,
    spaceBetween: -25,
  };

  constructor() { }

  segmentChanged(ev: any) {
    this.currentSegment = ev.detail.value;
  }

}
