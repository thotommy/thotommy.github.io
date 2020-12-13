import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CheckViewPortService } from '../shared/services/check-view-port.service';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('contactTypeWriter') contactTypeWriter;
  isTitleVisible: any;
  isTitleVisibleCounter: boolean;
  constructor(private checkViewPortService: CheckViewPortService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.typeWrite();
  }

  typeWrite() {
    const target2 = this.contactTypeWriter.nativeElement;
    console.log(target2);
    const writer2 = new Typewriter(target2, {
      loop: false,
      typeColor: 'white',
      animateCursor: true,
      cursorColor: 'white',
      typeSpeed: 40,
      deleteSpeed: 0,
    });

    this.isTitleVisible = writer2.type('cd Contact Me').queueClearText().type('Contact Me');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const inViewPort = this.checkViewPortService.IsElementInViewPort(this.contactTypeWriter);
    if (!this.isTitleVisibleCounter && inViewPort) {
      console.log('skill title is visible');
      this.isTitleVisibleCounter = true;
      this.isTitleVisible.start();
    }
    if (!inViewPort) {
      this.isTitleVisibleCounter = false;
    }
  }
}
