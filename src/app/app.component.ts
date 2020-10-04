import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { awayScore, homeScore } from '../store/actions';
import { selectallGoals, selectAway, selectHome } from '../store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public home$: Observable<number>;
  public away$: Observable<number>;
  public allGoals$: Observable<number>;

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.home$ = this.store.select(selectHome);
    this.away$ = this.store.select(selectAway);
    this.allGoals$ = this.store.select(selectallGoals);
  }

  public onHomeScoreButtonClick(): void {
    this.store.dispatch(homeScore());
  }

  public onAwayScoreButtonClick(): void {
    this.store.dispatch(awayScore());
  }
}
