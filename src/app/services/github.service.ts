import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Repo } from '../models/repo.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  baseUrl = 'https://api.github.com/';
  zen = 'zen';
  repos = 'users/motheblackcat/repos';

  constructor(private http: HttpClient) {}

  getZen(): Observable<string> {
    return this.http.get(`${this.baseUrl}${this.zen}`, { responseType: 'text' }) as Observable<string>;
  }

  // Define return type (Observable<Repo[]>)
  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseUrl}${this.repos}`).pipe(
      map((repos: Repo[]) => {
        return repos.map((repo: Repo) => {
          return { name: repo.name, description: repo.description, language: repo.language, html_url: repo.html_url };
        });
      })
    );
  }
}
