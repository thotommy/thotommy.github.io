import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { PortfolioApiService } from '../portfolio-api/portfolio-api.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChildren('TileId') viewChildren: QueryList<ElementRef>;
  public items: any[];
  public delayForProjectTiles = 0;
  getRepos: Subscription;
  animations = ['fadeInUp', 'fadeInRight', 'fadeInLeft', 'fadeInUp'];

  constructor(private apiService: PortfolioApiService) {
    console.log('The Project Constructor has been called.');
    this.items = [];
  }

  ngOnInit(): void {
    this.getRepos = this.apiService.retrieveGitRepos().subscribe((data) => {
      this.items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      // this.items = data;
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
