import {
  AfterViewInit,
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChildren,
  QueryList,
  Input,
  HostListener,
  ViewChild,
} from '@angular/core';
import { PortfolioApiService } from '../portfolio-api/portfolio-api.service';
import { Subscription } from 'rxjs';
import { CheckViewPortService } from '../shared/services/check-view-port.service';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('TileId') viewChildren: QueryList<ElementRef>;
  @ViewChild('projectTypeWriter') projectTypeWriter;
  isTitleVisible2: any;
  isTitleVisible2Counter: boolean;
  public items: any[];
  public delayForProjectTiles = 0;
  getRepos: Subscription;
  animations = ['fadeInUp', 'fadeInRight', 'fadeInLeft', 'fadeInUp'];

  constructor(private apiService: PortfolioApiService, private checkViewPortService: CheckViewPortService) {
    console.log('The Project Constructor has been called.');
    this.items = [];
  }

  ngOnInit(): void {
    this.getRepos = this.apiService.retrieveGitRepos().subscribe((data) => {
      this.items = data;
    });
  }

  ngAfterViewInit(): void {
    this.typeWrite();
  }

  ngOnDestroy(): void {
    this.items = [];
    // This is done, since I have to clear out and destory the div elements
    // when the component is destroyed.
    this.viewChildren.forEach((element) => {
      element.nativeElement.remove();
    });

    if (this.getRepos) {
      this.getRepos.unsubscribe();
    }
  }

  typeWrite() {
    const target2 = this.projectTypeWriter.nativeElement;
    console.log(target2);
    const writer2 = new Typewriter(target2, {
      loop: false,
      typeColor: 'white',
      animateCursor: true,
      cursorColor: 'white',
      typeSpeed: 40,
      deleteSpeed: 0,
    });

    this.isTitleVisible2 = writer2.type('cd Projects').queueClearText().type('Projects');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const inViewPort = this.checkViewPortService.IsElementInViewPort(this.projectTypeWriter);
    if (!this.isTitleVisible2Counter && inViewPort) {
      console.log('project title is visible');
      this.isTitleVisible2Counter = true;
      this.isTitleVisible2.start();
    }
    if (!inViewPort) {
      this.isTitleVisible2Counter = false;
    }
  }
}
