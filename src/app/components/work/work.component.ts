import { Observable, of } from 'rxjs';
import { Repo } from 'src/app/interfaces/repo.interface';
// TODO: Remove mock import when uneeded
import { mockRepos } from 'src/app/mocks/repos.mock';
import { GithubService } from 'src/app/services/github.service';

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  gs = inject(GithubService);

  // zen$: Observable<string> | undefined = this.gs.getZen();
  // repos$: Observable<Repo[]> | undefined = this.gs.getRepos();
  
  // TODO: Add API requests debounce / throttle / rate limit to prevent overload
  // TODO: Check return type from github API Observable<string | undefined> OR Observable<string> | undefined
  zen$: Observable<string | undefined> = of('Hey there!');
  repos$: Observable<Repo[]| undefined> = of(mockRepos);
}
