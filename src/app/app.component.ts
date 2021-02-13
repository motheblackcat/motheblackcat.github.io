import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll')
  onScrollHost(): void {
    const sections = document.querySelectorAll('section');
    sections.forEach((section: HTMLElement) => {
      const check = section.getBoundingClientRect().y >= -600 && section.getBoundingClientRect().y <= 400;
      const link = document.querySelector(`a[href="#${section.id}"]`) as HTMLElement;
      link.style.color = check ? 'white' : 'grey';
    });
  }

  ngOnInit(): void {
    this.onScrollHost();
  }
}
