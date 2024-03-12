import { LANGUAGES_NAMES } from '../enums/languages.enum';
import { Repo } from '../interfaces/repo.interface';

export const repos: Repo[] = [
  {
    name: 'lk',
    description: 'Unity 2D heroic-fantasy adventure game demo / sandbox project in Unity.',
    language: LANGUAGES_NAMES.CSHARP,
    html_url: 'https://google.com',
    topics: ['unity']
  },
  {
    name: 'nhl-v2',
    description: 'Character sheet for the tabletop rpg "Le Donjon de Naheulbeuk" mobile app made with Ionic (Angular) available on the Play Store.',
    language: LANGUAGES_NAMES.TYPESCRIPT,
    html_url: 'https://google.com',
    topics: ['ionic']
  },
  {
    name: 'lolcheck',
    description: 'A simple React test app with the riot api.',
    language: LANGUAGES_NAMES.TYPESCRIPT,
    html_url: 'https://google.com',
    topics: ['react', 'riot-api']
  },
  {
    name: 'motheblackcat.github.io',
    description: 'Angular project for a github page.',
    language: LANGUAGES_NAMES.TYPESCRIPT,
    html_url: 'https://google.com',
    topics: ['angular']
  }
];
