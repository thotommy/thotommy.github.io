import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { ParallaxTransition } from '../shared/directives/parallax.directive';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  visible = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.visible = false;
  }

  action(event: ParallaxTransition) {
    this.visible = event.startTransition;
    if (event.startTransition) {
      this.renderer.removeClass(event.element, 'animated');
      this.renderer.removeClass(event.element, 'fadeInDown');
      this.renderer.addClass(event.element, 'animated');
      this.renderer.addClass(event.element, 'fadeOutUp');
    } else {
      this.renderer.removeClass(event.element, 'animated');
      this.renderer.removeClass(event.element, 'fadeOutUp');
      this.renderer.addClass(event.element, 'animated');
      this.renderer.addClass(event.element, 'fadeInDown');
    }
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
  }
}
