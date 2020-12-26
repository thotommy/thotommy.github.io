import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CheckViewPortService } from '../shared/services/check-view-port.service';
import Typewriter from 't-writer.js';
import { PortfolioApiService } from '../portfolio-api/portfolio-api.service';
import { SubmitContactRequest } from '../shared/models/models';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('contactTypeWriter') contactTypeWriter;
  @ViewChild('emailValidation') emailValidation;
  @ViewChild('nameValidation') nameValidation;

  isTitleVisible: any;
  isTitleVisibleCounter: boolean;

  public username: string = null;
  public email: string = null;
  public message: string = null;

  subs = new SubSink();

  constructor(private checkViewPortService: CheckViewPortService, private apiService: PortfolioApiService) {}

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

  sendMessage() {
    const req = { name: this.username, email: this.email, message: this.message } as SubmitContactRequest;
    if (this.nameValidation.errors && this.emailValidation.errors) {
      alert('Please enter your name and email.');
      return;
    }
    if (this.nameValidation.errors && !this.emailValidation.errors) {
      alert('Please enter your name.');
      return;
    }
    if (!this.nameValidation.errors && this.emailValidation.errors) {
      alert('Please enter your email.');
      return;
    }
    this.subs.sink = this.apiService.submitContactInfo(req).subscribe(
      (data) => {
        console.log('Contacted');
        alert('Thanks for the submission');
        this.clearSubmit();
      },
      (err) => {
        console.log('Contacted');
        alert('Thanks for the submission');
        this.clearSubmit();
      }
    );
  }

  clearSubmit() {
    window.scrollTo(0, 0);
    this.username = '';
    this.email = '';
    this.message = '';
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const inViewPort = this.checkViewPortService.IsElementInViewPort(this.contactTypeWriter);
    if (!this.isTitleVisibleCounter && inViewPort) {
      this.isTitleVisibleCounter = true;
      this.isTitleVisible.start();
    }
    if (!inViewPort) {
      this.isTitleVisibleCounter = false;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
