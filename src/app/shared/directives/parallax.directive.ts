import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('ratio') parallaxRatio = 1;
  @Output() startTransition = new EventEmitter<ParallaxTransition>();
  initialTop = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top =
      this.initialTop - window.scrollY * this.parallaxRatio + 'px';

    if (window.scrollY < 20) {
      this.startTransition.emit({
        startTransition: false,
        element: this.eleRef.nativeElement,
      } as ParallaxTransition);
      return;
    }
    if (this.eleRef.nativeElement.getBoundingClientRect().top < -41) {
      this.startTransition.emit({
        startTransition: true,
        element: this.eleRef.nativeElement,
      } as ParallaxTransition);
      return;
    }
    if (
      this.eleRef.nativeElement.getBoundingClientRect().top > -41 &&
      window.scrollY > 20
    ) {
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
