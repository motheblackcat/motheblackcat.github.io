import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepo } from 'src/app/interfaces/repo.interface';
import { GithubService } from 'src/app/services/github.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  gs = inject(GithubService);

  // TODO: Add API requests debounce / throttle / rate limit to prevent overload
  zen$: Observable<string> = this.gs.getZen();
  repos$: Observable<IRepo[]> = this.gs.getRepos();
}
