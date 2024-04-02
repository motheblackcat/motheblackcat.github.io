import { Observable, of } from 'rxjs';
import { Repo } from 'src/app/interfaces/repo.interface';
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

  // TODO: Add API requests debounce / throttle to prevent overload
  // zen$: Observable<string> | undefined = this.gs.getZen();
  // repos$: Observable<Repo[]> | undefined = this.gs.getRepos();
  zen$: Observable<string> | undefined = of('Mock!');
  repos$: Observable<Repo[]> | undefined = of(mockRepos);
}
