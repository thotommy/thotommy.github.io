import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectTools, FadeState } from '../../models/models';

@Component({
  selector: 'app-tiles',
  templateUrl: './animated-tiles.component.html',
  styleUrls: ['./animated-tiles.component.scss'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1',
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0',
        })
      ),
      transition('* => visible', [animate('300ms ease-out')]),
      transition('visible => hidden', [animate('300ms ease-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedTilesComponent implements OnInit {
  @Input() tileData: any;
  toolData: ProjectTools[] = require('@assets/data/projectTools.json');
  toolDataDisplay: string[] = [];
  showTechPanel = false;
  state: FadeState = 'hidden';
  isMobile: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = 'ontouchstart' in document.documentElement;
    // If mobile device then just leave it visible.
    if (this.isMobile) {
      this.state = 'visible';
    }
    this.retrieveToolImages();
  }

  onNavigate() {
    window.open(this.tileData.html_url, '_blank');
  }

  retrieveToolImages() {
    this.toolData.forEach((data) => {
      if (data.project === this.tileData.name) {
        data.tools.map((tool) => {
          this.retrieveImagePath(tool);
        });
      }
    });
  }

  retrieveImagePath(tool: string): string {
    switch (tool) {
      case 'node':
        this.toolDataDisplay.push('/assets/images/logos/node.svg');
        break;
      case 'handlebars':
        this.toolDataDisplay.push('/assets/images/logos/handlebars.svg');
        break;
      case 'angular':
        this.toolDataDisplay.push('/assets/images/logos/angular.svg');
        break;
      case 'react':
        this.toolDataDisplay.push('/assets/images/logos/react.svg');
        break;
      case 'c#':
        this.toolDataDisplay.push('/assets/images/logos/csharp.svg');
        break;
      case 'python': 
        this.toolDataDisplay.push('/assets/images/logos/python.svg')
      default:
        return '';
    }
  }
}
