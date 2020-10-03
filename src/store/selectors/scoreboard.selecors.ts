import { createSelector } from '@ngrx/store';

import { AppState, GameState } from '../models';

export const selectGame = (state: AppState) => state.game;

export const selectHome = createSelector(
  selectGame,
  (game: GameState) => game.home
);
