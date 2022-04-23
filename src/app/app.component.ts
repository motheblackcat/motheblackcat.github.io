import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll')
  onScrollHost(): void {
    const divs = document.querySelectorAll('div[id]');
    divs.forEach((div: Element) => {
      const check = div.getBoundingClientRect().y >= -600 && div.getBoundingClientRect().y <= 400;
      const link = document.querySelector(`a[href="#${div.id}"]`) as HTMLElement;
      link.style.color = check ? 'white' : 'grey';
    });
  }

  ngOnInit(): void {
    this.onScrollHost();
  }
}
