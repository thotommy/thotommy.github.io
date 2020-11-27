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
  checkWidth: boolean;
  tabActive: number;

  constructor() {}

  ngOnInit(): void {
    this.visible = false;
    this.innerWidth = window.innerHeight;
    this.checkWidth = innerWidth < 960;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkWidth = innerWidth < 960;
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
