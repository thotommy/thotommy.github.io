import { Component, OnInit } from '@angular/core';
import { PortfolioApiService } from '../portfolio-api/portfolio-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public items;
  // TODO:TH No lazy routing at all for any of the pages should there be any?
  constructor(private apiService: PortfolioApiService) {
    this.items = [];
  }

  ngOnInit(): void {
    // console.log(this.apiService.retrieveGitRepos());
    this.apiService.retrieveGitRepos().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
  }
}
