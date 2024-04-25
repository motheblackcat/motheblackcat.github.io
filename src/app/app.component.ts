import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, WorkComponent],
  templateUrl: './app.component.html'
})

export class AppComponent { }
