import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // TODO: Fix menu highlight
  // TODO: Fix header bg-color on scroll (host window scroll) color swap animation + get programatically current section bg-color
  ngOnInit() {
    const hash: string = window.location.hash ? window.location.hash : '#home';
    (document.querySelector(`a[href="${hash}"]`) as HTMLLinkElement).className = 'active';

    this.updateHeaderBgColor(hash);
  }

  selectSection(event: Event) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.className = '');
    (event.currentTarget as HTMLLinkElement).className = 'active';

    this.updateHeaderBgColor((event.currentTarget as HTMLAnchorElement).hash);
  }

  updateHeaderBgColor(hash: string) {
    const header = document.querySelector('header');
    if (header) {
      header.style.backgroundColor = hash === '#home' ? 'black' : '#0d1117';
    }
  }
}
