import { Repo } from '../interfaces/repo.interface';

export const repos: Repo[] = [
  {
    name: 'vue-test',
    description: 'A coding test on Vue.',
    language: 'Vue',
    html_url: 'https://google.com',
    topics: ['vue']
  },
  {
    name: 'lk',
    description: 'The test on unity you know',
    language: 'Unity',
    html_url: 'https://google.com',
    topics: []
  },
  {
    name: 'NgPowa',
    description: 'The best frontend framework ever!',
    language: 'Vue',
    html_url: 'https://google.com',
    topics: ['angular']
  },
  {
    name: 'NgPowa',
    description: 'The best frontend framework ever!',
    language: 'TypeScript',
    html_url: 'https://google.com',
    topics: []
  }
];
