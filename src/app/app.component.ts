import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, HomeComponent, WorkComponent],
  templateUrl: './app.component.html'
})

export class AppComponent { }
