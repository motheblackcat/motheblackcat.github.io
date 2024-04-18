import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { URLS } from '../enums/url.enum';
import { ILatestRelease } from '../interfaces/latest_release.interface';
import { IRepo } from '../interfaces/repo.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  http = inject(HttpClient);
  
  getZen(): Observable<string> {
    return this.http.get(`${URLS.BASE}${URLS.ZEN}`, { responseType: 'text' });
  }

  getRepos(): Observable<IRepo[]> {
    const sort = 'updated';
    const perPage = 4;
    const params = { sort, perPage };

    const url: string = `${URLS.BASE}${URLS.REPOS}`;
    return this.http.get<IRepo[]>(url);
  }

  getLatestRelease(repo: string | undefined): Observable<ILatestRelease> {
    return this.http.get<ILatestRelease>(`${URLS.BASE}repos/motheblackcat/${repo}/releases/latest`);
  }
}
