import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, GameState } from '../models';
import { scoreboardFeatureKey } from '../reducers';

export const selectGame = createFeatureSelector<AppState, GameState>(
  scoreboardFeatureKey
);

export const selectHome = createSelector(
  selectGame,
  (game: GameState, props: any) => game.home + props.numberToAdd
);

export const selectAway = createSelector(
  selectGame,
  (game: GameState, props: any) => game.away + props.numberToAdd
);
