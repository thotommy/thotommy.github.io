import { Component, OnInit, HostBinding } from '@angular/core';
import { PortfolioApiService } from '../portfolio-api/portfolio-api.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('*=>*', [
        // each time the binding value changes
        query(
          '.hey',
          [
            style({ opacity: 0 }),
            stagger(100, [
              animate('500ms', style({ opacity: 1, transform: 'none' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    // query('app-tiles', [
    //   style({ opacity: 0, transform: 'translateY(-50px)' }),
    //   stagger(100, [
    //     animate('500ms', style({ opacity: 1, transform: 'none' })),
    //   ]),
    // ]),
    // trigger('filterAnimation', [
    //   transition(':enter, * => 0, * => -1', []),
    //   transition(':increment', [
    //     query(
    //       ':enter',
    //       [
    //         style({ opacity: 0, width: '0px' }),
    //         stagger(50, [
    //           animate('300ms ease-out', style({ opacity: 1, width: '*' })),
    //         ]),
    //       ],
    //       { optional: true }
    //     ),
    //   ]),
    // ]),
    // TODO: TH Currently working on trying to get Angular Animations to work with triggering animations staggering for each view box.
    // TODO: TH Need to figure out how to trigger it based on the tab active that is there boolean.
    // trigger('fadeIn', [
    //   query('.hey', [
    //     style({ opacity: 0, transform: 'translateY(-50px)' }),
    //     stagger(100, [
    //       animate('500ms', style({ opacity: 1, transform: 'none' })),
    //     ]),
    //   ]),
    // ]),
  ],
})
export class ProjectsComponent implements OnInit {
  //   transition('* => void', [
  //     style({ opacity: '0' }),
  //     animate('.5s ease-out', style({ opacity: '1' })),
  //   ]),
  // @HostBinding('@fadeIn')
  public items;
  // TODO:TH No lazy routing at all for any of the pages should there be any?
  constructor(private apiService: PortfolioApiService) {
    this.items = [];
  }

  ngOnInit(): void {
    // console.log(this.apiService.retrieveGitRepos());
    this.apiService.retrieveGitRepos().subscribe((data) => {
      console.log(data);
      // Test Data
      const data2 = [
        { name: 'hey' },
        { name: 'sould' },
        { name: 'sister' },
        { name: 'hey' },
        { name: 'hey' },
        { name: 'hey' },
      ];
      this.items = data2;
    });
  }
}
