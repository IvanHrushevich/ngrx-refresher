import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AppService } from '../../app/app.service';
import { init, setScores } from '../actions';
import { GameState } from '../models';

@Injectable()
export class ScoreboardEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      mergeMap(() =>
        this.appService.getScore().pipe(
          map((game: GameState) => setScores({ game })),
          catchError(() => of({ type: '[YYY] nnn' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
