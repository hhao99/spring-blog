import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserApp } from './features/users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserApp],
  template: `
    <user-app />
    <hr />
    <router-outlet />
  `
})
export class App {
  protected readonly title = signal('front-ui');
}
