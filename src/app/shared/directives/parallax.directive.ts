import { Directive, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('ratio') parallaxRatio = 1;
  @Input() startParallaxPositionScroll: number;
  @Input() resetParallaxPositionScroll: number;

  @Output() startTransition = new EventEmitter<ParallaxTransition>();
  initialTop = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    // console.log(this.eleRef);
    console.log('Window Scroll Y position = ' + window.scrollY);

    this.eleRef.nativeElement.style.top = this.initialTop - window.scrollY * this.parallaxRatio + 'px';

    console.log('bounding element client rect top ' + this.eleRef.nativeElement.getBoundingClientRect().top);
    // console.log('bounding element client rect bot ' + this.eleRef.nativeElement.getBoundingClientRect().bottom);
    // console.log('this.eleRef.nativeElement.style.top = ' + this.eleRef.nativeElement.style.top);
    // console.log('this.eleRef.nativeElement.style.bot = ' + this.eleRef.nativeElement.style.bottom);

    if (window.scrollY < this.resetParallaxPositionScroll) {
      console.error('false transition');
      this.startTransition.emit({
        startTransition: false,
        element: this.eleRef.nativeElement,
      } as ParallaxTransition);
      return;
    }
    if (this.eleRef.nativeElement.getBoundingClientRect().top < this.startParallaxPositionScroll) {
      // console.error('starting transition');
      this.startTransition.emit({
        startTransition: true,
        element: this.eleRef.nativeElement,
      } as ParallaxTransition);
      return;
    }
    if (
      this.eleRef.nativeElement.getBoundingClientRect().top > this.startParallaxPositionScroll &&
      window.scrollY > this.resetParallaxPositionScroll
    ) {
      // console.error('false transition 1');
      this.startTransition.emit({
        startTransition: false,
        element: this.eleRef.nativeElement,
      } as ParallaxTransition);
      return;
    }
  }
}

export class ParallaxTransition {
  startTransition: boolean;
  element: ElementRef;
}
// curl -i https://api.github.com/users/thotommy/repos
