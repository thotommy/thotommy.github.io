import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  @ViewChild('tommy')
  homeEle: ElementRef;
  @ViewChild('skills')
  skillsEle: ElementRef;
  @ViewChild('projects')
  projectsEle: ElementRef;
  @ViewChild('contactMe')
  contactEle: ElementRef;

  visible = false;
  innerWidth: any;
  modifyHeight: boolean;
  mobileWidth: boolean;
  tabActive: number;

  constructor() {}

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
}
