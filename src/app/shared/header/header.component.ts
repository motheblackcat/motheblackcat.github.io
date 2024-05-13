import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll')
  onScrollEvent() {
    this.updateNav();
  }

  ngOnInit() {
    this.updateNav();
  }

  updateNav() {
    const navLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('nav a');
    navLinks.forEach(navLink => navLink.className = '');

    const workSectionY = Math.abs(document.querySelector('#work')!.getBoundingClientRect().y);
    const halfInnerHeight = window.innerHeight / 2;
    const hash = workSectionY < halfInnerHeight ? '#work' : '#home';

    document.querySelector(`a[href="${hash}"]`)!.className = 'active';
    document.querySelector('header')!.style.backgroundColor = hash === '#home' ? 'black' : '#0d1117';
  }
}
