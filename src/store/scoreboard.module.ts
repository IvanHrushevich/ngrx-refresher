import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ScoreboardEffects } from './effects';
import * as fromScoreboard from './reducers/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromScoreboard.scoreboardFeatureKey,
      fromScoreboard.scoreboardReducer
    ),
    EffectsModule.forFeature([ScoreboardEffects]),
  ],
})
export class ScoreboardModule {}
