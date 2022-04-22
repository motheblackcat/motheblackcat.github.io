import { Observable } from 'rxjs';
import { Repo } from 'src/app/interfaces/repo.interface';
import { GithubService } from 'src/app/services/github.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  zen$: Observable<string> | undefined;
  repos$: Observable<Repo[]> | undefined;

  constructor(private gs: GithubService) { }

  ngOnInit(): void {
    this.zen$ = this.gs.getZen();
    this.repos$ = this.gs.getRepos();
  }
}
