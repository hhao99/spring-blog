import { Component, input, inject } from '@angular/core';
import { User } from './users.servce';
import { UserStore } from './users.servce';

@Component({
  selector: 'user-item',
  imports: [],
  template: `
    <li>
    <span>{{ user().login }} - {{ user().email }}</span>
    <button (click)="onDelete()">x</button>
    </li>
  `
})
export class UserItem {
  readonly user = input.required<User>();
  readonly userStore = inject(UserStore);

  onDelete () {
    this.userStore.deleteUser(this.user().id);
  }
}
