import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  links = [
    { url: 'https://angular.io/', icon: 'fab fa-angular fa-3x', class: 'angular' },
    { url: 'https://reactjs.org/', icon: 'fab fa-react fa-3x', class: 'react' },
    { url: 'https://vuejs.org/', icon: 'fab fa-vuejs fa-3x', class: 'vue' },
    { url: 'https://unity.com/solutions/game', icon: 'fab fa-unity fa-3x', class: 'unity' },
  ];
}
