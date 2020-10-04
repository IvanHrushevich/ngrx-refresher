import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { homeScore } from '../store/actions';
import { selectHome } from '../store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public home$: Observable<any>;

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.home$ = this.store.select(selectHome, { numberToAdd: 100 });
  }

  public onHomeScoreButtonClick(): void {
    this.store.dispatch(homeScore());
  }
}
