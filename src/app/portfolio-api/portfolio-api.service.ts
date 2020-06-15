import { Injectable } from '@angular/core';
import { ApiRoutes } from './portfolio-api';
import { ApiClientService } from './api.client.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioApiService {
  constructor(private apiService: ApiClientService) {}

  retrieveGitRepos() {
    return this.apiService.get<any>(
      'https://api.github.com/users/thotommy/repos'
    );
  }
}
