import { CommonModule } from '@angular/common';
import { Component, effect, inject, input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LANGUAGES_COLORS, LANGUAGES_NAMES } from 'src/app/enums/languages.enum';
import { ILatestRelease } from 'src/app/interfaces/latest_release.interface';
import { IRepo } from 'src/app/interfaces/repo.interface';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  repo = input<IRepo>();
  gs = inject(GithubService);

  latestRelease$: Observable<ILatestRelease>  = of();
  cSharp = LANGUAGES_NAMES.CSHARP;

  constructor() {
    effect(() => this.latestRelease$ = this.gs.getLatestRelease(this.repo()?.name));
  }

  getDotColor(language: string | undefined): string {
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
