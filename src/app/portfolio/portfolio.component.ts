import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import Typewriter from 't-writer.js';
import { CheckViewPortService } from '../shared/services/check-view-port.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('tommy') homeEle: ElementRef;
  @ViewChild('skills') skillsEle: ElementRef;
  @ViewChild('projects') projectsEle: ElementRef;
  @ViewChild('contactMe') contactEle: ElementRef;
  @ViewChild('typewriter') typewriter;

  visible = false;
  innerWidth: any;
  modifyHeight: boolean;
  mobileWidth: boolean;
  tabActive: number;

  constructor(private checkViewPortService: CheckViewPortService) {}

  // Ensure that the page goes to the top on reload
  @HostListener('window:beforeunload') goToPage() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.visible = false;
    this.innerWidth = window.innerWidth;
    this.modifyHeight = innerWidth < 960 || window.innerHeight <= 678;
    this.mobileWidth = innerWidth < 578;
  }

  ngAfterViewInit() {
    this.typeWrite();
    console.log('home ' + this.checkViewPortService.IsElementInViewPort(this.homeEle));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.modifyHeight = innerWidth < 960 || window.innerHeight <= 678;
    this.mobileWidth = innerWidth < 578;
  }

  home() {
    this.homeEle.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  skill() {
    this.skillsEle.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  project() {
    this.projectsEle.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  contact() {
    this.contactEle.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  typeWrite() {
    const target = this.typewriter.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      animateCursor: true,
      cursorColor: 'white',
    });
    writer
      .rest(500)
      .clear()
      .type('Software Engineer')
      .rest(500)
      .clear()
      .type('Full Stack Developer')
      .rest(500)
      .clear()
      .type('Angular Developer')
      .rest(500)
      .start();
  }
}
