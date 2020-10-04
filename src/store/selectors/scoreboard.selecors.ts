import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, GameState } from '../models';
import { scoreboardFeatureKey } from '../reducers';

export const selectGame = createFeatureSelector<AppState, GameState>(
  scoreboardFeatureKey
);

export const selectHome = createSelector(
  selectGame,
  (game: GameState) => game.home
);

export const selectAway = createSelector(
  selectGame,
  (game: GameState) => game.away
);

export const selectallGoals = createSelector(
  selectHome,
  selectAway,
  (home, away) => home + away
);
