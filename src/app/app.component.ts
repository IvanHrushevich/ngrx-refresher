import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { homeScore } from './../store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly store: Store) {}
  public onHomeScoreButtonClick(): void {
    this.store.dispatch(homeScore());
  }
}
