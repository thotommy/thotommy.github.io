import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { startWith, delay, takeWhile, map, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { trigger } from '@angular/animations';
import { AnimateService } from './animate.service';
import { animationSpeed, animationEffect, PlayParameters } from './animate.types';

// Animations
import { fadeIn } from './entrances/fade-in';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[animateElement]',
  template: '<ng-content></ng-content>',
  animations: [trigger('animate', [...fadeIn])],
})
export class AnimateComponent implements OnInit, OnDestroy {
  // TODO:TH Fix up the animation classes.
  private replay$ = new Subject<boolean>();
  private sub: Subscription;
  // Animating time and delay
  private timing: string;
  private delay: string;
  // Animating Type
  public animating = false;
  public animated = false;

  // Input Decorators
  /** Selects the animation to be played */
  // tslint:disable-next-line: no-input-rename
  @Input('animateElement') animate: animationEffect;

  /** Speeds up or slows down the animation */
  @Input() set speed(speed: animationSpeed) {
    // Turns the requested speed into a valid timing
    this.timing = {
      slower: '3s',
      slow: '2s',
      normal: '1s',
      fast: '500ms',
      faster: '300ms',
    }[speed || 'normal'];
  }

  /** Delays the animation */
  @Input('delay') set postpone(delayValue: string) {
    // Coerces the input into a number first
    const value = coerceNumberProperty(delayValue, 0);
    if (value) {
      // Turns a valid number into a ms delay
      this.delay = `${value}ms`;
    } else {
      // Test the string for a valid delay combination
      this.delay = /^\d+(?:ms|s)$/.test(delayValue) ? delayValue : '';
    }
  }

  /** Disables the animation */
  @Input('disabled') set disableAnimation(value: boolean) {
    this.disabled = coerceBooleanProperty(value);
  }

  /** When true, keeps the animation idle until the next replay triggers */
  @Input('paused') set pauseAnimation(value: boolean) {
    this.paused = coerceBooleanProperty(value);
  }
  public paused = false;

  // When defined, triggers the animation on element scrolling in the viewport by the specified amount.
  // Amount defaults to 50% when not specified
  @Input('aos') set enableAOS(value: number) {
    this.threshold = coerceNumberProperty(value, 0.5);
  }
  private threshold = 0;

  /** When true, triggers the animation on element scrolling in the viewport */
  @Input('once') set aosOnce(value: boolean) {
    this.once = coerceBooleanProperty(value);
  }
  public once = false;

  /** Replays the animation */
  @Input() set replay(replay: any) {
    // Re-triggers the animation again on request (skipping the very fist value)
    if (!!this.trigger && coerceBooleanProperty(replay)) {
      this.trigger = this.idle;
      this.replay$.next(true);
    }
  }

  // Emitters
  /** Emits at the end of the animation */
  @Output() start = new EventEmitter<void>();
  @Output() done = new EventEmitter<void>();

  // Host Bindings
  @HostBinding('@animate') private trigger;
  @HostBinding('@.disabled') public disabled = false;

  // Host Listeners
  @HostListener('@animate.start')
  private animationStart() {
    this.animating = true;
    this.animated = false;
    this.start.emit();
  }

  @HostListener('@animate.done')
  private animationDone() {
    this.animating = false;
    this.animated = true;
    this.done.emit();
  }

  constructor(private elm: ElementRef, private scroll: AnimateService) {
    scroll.isMobile = 'ontouchstart' in document.documentElement;
  }

  private get idle() {
    if (this.scroll.isMobile) {
      return null;
    }
    return { value: `idle-${this.animate}` };
  }
  private get play() {
    const params = {} as PlayParameters;
    // Builds the params object, so, leaving to the default values when undefined
    if (!!this.timing) {
      params.timing = this.timing;
    }
    if (!!this.delay) {
      params.delay = this.delay;
    }

    // Turns off animations if on mobile
    if (this.scroll.isMobile) {
      this.animate = null;
    }
    return { value: this.animate, params };
  }

  ngOnInit() {
    if (!this.scroll.isMobile) {
      // Sets the idle state for the given animation
      this.trigger = this.idle;
      // Triggers the animation based on the input flags
      this.sub = this.replay$
        .pipe(
          // Waits the next round to re-trigger
          delay(0),
          // Triggers immediately when not paused
          startWith(!this.paused),
          // Builds the AOS observable from the common service
          this.scroll.trigger(this.elm, this.threshold),
          // Stops after the first on trigger when 'once' is set
          takeWhile((triggerTake) => !triggerTake || !this.once, true),
          // Maps the trigger into animation states
          map((triggerAnimationValue) => (triggerAnimationValue ? this.play : this.idle)),
          // Always start with idle
          startWith(this.idle),
          // Eliminates multiple triggers
          distinctUntilChanged()
        )
        .subscribe((triggerResp) => {
          this.trigger = triggerResp;
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
