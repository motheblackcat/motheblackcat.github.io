import { LANGUAGES_COLORS, LANGUAGES_NAMES } from 'src/app/enums/languages.enum';
import { Repo } from 'src/app/interfaces/repo.interface';

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // TODO: Make sure it's non-null or undefined value
  repo = input<Repo>();

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
