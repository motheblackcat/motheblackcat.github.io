import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll')
  onScrollHost() {
    const divs = document.querySelectorAll('div');
    divs.forEach((div: HTMLElement) => {
      const check = div.getBoundingClientRect().y >= -600 && div.getBoundingClientRect().y <= 400;
      const link = document.querySelector(`a[href="#${div.id}"]`) as HTMLElement;
      link.style.color = check ? 'white' : 'grey';
    });
  }

  ngOnInit() {
    this.onScrollHost();
  }
}
