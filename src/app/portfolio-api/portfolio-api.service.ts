import { Injectable } from '@angular/core';
import { ApiClientService } from './api.client.service';
import { SubmitContactRequest } from '../shared/models/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioApiService {
  constructor(private apiService: ApiClientService) {}

  retrieveGitRepos() {
    return this.apiService.get<any>('https://api.github.com/users/thotommy/repos');
  }

  submitContactInfo(req: SubmitContactRequest) {
    return this.apiService.post<any>(environment.CONTACT_API_URL, req);
  }
}
