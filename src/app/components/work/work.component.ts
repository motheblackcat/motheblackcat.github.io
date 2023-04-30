import { Observable, of } from 'rxjs';
import { Repo } from 'src/app/interfaces/repo.interface';
import { repos } from 'src/app/mocks/repos.mock';
import { GithubService } from 'src/app/services/github.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  zen$: Observable<string> | undefined;
  repos$: Observable<Repo[]> | undefined;

  constructor(private gs: GithubService) { }

  /** TBD: Caching system to prevent API requests overload **/
  ngOnInit(): void {
    this.zen$ = this.gs.getZen();
    this.repos$ = this.gs.getRepos();
  }
}
