import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { GameState } from '../store/models/game-state.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getScore(): Observable<GameState> {
    return of({
      home: 50,
      away: 50,
    });
  }
}
