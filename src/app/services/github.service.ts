import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URLS } from '../enums/url.enum';
import { Repo } from '../interfaces/repo.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  URLS = URLS;

  constructor(private http: HttpClient) { }

  getZen(): Observable<string> {
    return this.http.get(`${this.URLS.BASE}${this.URLS.ZEN}`, { responseType: 'text' });
  }

  getRepos(): Observable<Repo[]> {
    const sort = 'updated';
    const per_page = 4;

    const url: string = `${this.URLS.BASE}${this.URLS.REPOS}`;
    const params = { sort, per_page };

    return this.http.get<Repo[]>(url, { params });
  }
}
