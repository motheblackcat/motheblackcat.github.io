import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { Repo } from 'src/app/models/repo.interface';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  zen$: Observable<string> | undefined;
  repos$: Observable<Repo[]> | undefined;
  repos: Repo[] = [
    {
      name: 'Riot Test',
      description:
        'For API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether Basic Authentication or an OAuth token was used',

      language: 'React',
      html_url: 'https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting',
    },
    {
      name: 'Knight',
      description: 'The test on unity you know',
      language: 'Unity',
      html_url: 'https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting',
    },
    {
      name: 'Vue',
      description: 'For API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour',
      language: 'Vue',
      html_url: 'https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting',
    },
    {
      name: 'Git IO',
      description:
        'For API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hourFor API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour',
      language: 'CSS',
      html_url: 'https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting',
    },
    {
      name: 'lk',
      description: 'For API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour',
      language: 'Typescript',
      html_url: 'https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting',
    },
  ];

  constructor(private gs: GithubService) {}

  ngOnInit(): void {
    this.zen$ = this.gs.getZen();
    this.repos$ = this.gs.getRepos();
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
