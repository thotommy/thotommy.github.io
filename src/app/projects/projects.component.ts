import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { PortfolioApiService } from '../portfolio-api/portfolio-api.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          '.projectTiles',
          [
            style({ opacity: 0 }),
            stagger(300, [
              animate('600ms', style({ opacity: 1, transform: 'none' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChildren('TileId') viewChildren: QueryList<ElementRef>;
  public items: any[];
  getRepos: Subscription;

  constructor(private apiService: PortfolioApiService) {
    console.log('The Project Constructor has been called.');
    this.items = [];
  }

  ngOnInit(): void {
    console.log('THe Project NgOnIt has been called.');
    if (this.items.length > 0) {
      console.log('Items length is greater than zero');
    }
    this.getRepos = this.apiService.retrieveGitRepos().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
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
}
