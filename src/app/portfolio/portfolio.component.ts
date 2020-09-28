import { Component, OnInit, ViewEncapsulation, Renderer2, HostListener } from '@angular/core';
// TODO:TH See if we can consolidate the parallax to only be for portfolio component,
// to consolidate for all pages.
import { ParallaxTransition } from './directives/parallax.directive';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  visible = false;
  innerWidth: any;
  checkWidth: boolean;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.visible = false;
    this.innerWidth = window.innerWidth;
    this.checkWidth = innerWidth < 960;
  }

  action(event: ParallaxTransition) {
    this.visible = event.startTransition;
    // console.log(event);
    // if (event.startTransition) {
    //   this.renderer.removeClass(event.element, 'animated');
    //   this.renderer.removeClass(event.element, 'fadeInDown');
    //   this.renderer.addClass(event.element, 'animated');
    //   this.renderer.addClass(event.element, 'fadeOutUp');
    // } else {
    //   this.renderer.removeClass(event.element, 'animated');
    //   this.renderer.removeClass(event.element, 'fadeOutUp');
    //   this.renderer.addClass(event.element, 'animated');
    //   this.renderer.addClass(event.element, 'fadeInDown');
    // }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkWidth = innerWidth < 960;
  }
}
