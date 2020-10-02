import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { login } from './../store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly store: Store) {}
  public onLoginButtonClick(): void {
    this.store.dispatch(login({ username: 'username', password: 'password' }));
  }
}
