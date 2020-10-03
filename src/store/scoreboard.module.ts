import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromScoreboard from './reducers/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromScoreboard.scoreboardFeatureKey,
      fromScoreboard.scoreboardReducer
    ),
  ],
})
export class ScoreboardModule {}
