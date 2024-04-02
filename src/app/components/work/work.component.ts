import { Observable, of } from 'rxjs';
import { LANGUAGES_COLORS, LANGUAGES_NAMES } from 'src/app/enums/languages.enum';
import { Repo } from 'src/app/interfaces/repo.interface';
import { mockRepos } from 'src/app/mocks/repos.mock';
import { GithubService } from 'src/app/services/github.service';

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  getDotColor(language: string): string {
    switch (language) {
      case LANGUAGES_NAMES.TYPESCRIPT:
        return LANGUAGES_COLORS.TYPESCRIPT;

      case LANGUAGES_NAMES.JAVASCRIPT:
        return LANGUAGES_COLORS.JAVASCRIPT;

      case LANGUAGES_NAMES.CSHARP:
        return LANGUAGES_COLORS.CSHARP;

      default:
        return LANGUAGES_COLORS.UNKNOWN;
    }
  }
}
