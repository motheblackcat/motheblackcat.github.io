import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { URLS } from '../enums/url.enum';
import { Repo } from '../interfaces/repo.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  http = inject(HttpClient);
  
  getZen(): Observable<string> {
    return this.http.get(`${URLS.BASE}${URLS.ZEN}`, { responseType: 'text' });
  }

  getRepos(): Observable<Repo[]> {
    const sort = 'updated';
    const perPage = 4;

    const url: string = `${URLS.BASE}${URLS.REPOS}`;
    const params = { sort, perPage };

    return this.http.get<Repo[]>(url, { params });
  }

  // TODO: Get latest release instead of homepage url for unity projects
}
