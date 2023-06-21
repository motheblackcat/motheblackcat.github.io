import { Observable, of } from 'rxjs';
import { Repo } from 'src/app/interfaces/repo.interface';
import { GithubService } from 'src/app/services/github.service';

import { Component, OnInit } from '@angular/core';
import { repos } from 'src/app/mocks/repos.mock';
import { LANGUAGES } from 'src/app/enums/languages.enum';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  zen$: Observable<string> | undefined;
  repos$: Observable<Repo[]> | undefined = of(repos);

  constructor(private gs: GithubService) { }

  // TODO: Test API requests overload prevention
  // TODO: Re-add Github Zen
  ngOnInit() {
    // this.zen$ = this.gs.getZen();
    this.repos$ = this.gs.getRepos();
  }

  getDotColor(language: string): string {
    switch (language) {
      case LANGUAGES.TYPESCRIPT:
        return '#287dc6';

      case LANGUAGES.JAVASCRIPT:
        return 'yellow';

      case LANGUAGES.CSHARP:
        return '#651471';

      default:
        return 'gray';
    }
  }
}
