import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  ngOnInit() {
    const hash: string = window.location.hash ? window.location.hash : '#home';
    (document.querySelector(`a[href="${hash}"]`) as HTMLLinkElement).className = 'active';
  }

  selectSection(event: Event) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.className = '');
    (event.currentTarget as HTMLLinkElement).className = 'active';
  }
}
