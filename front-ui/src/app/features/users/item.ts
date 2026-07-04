import { Component, input } from '@angular/core';
import { User } from './users.servce';

@Component({
  selector: 'user-item',
  imports: [],
  template: `
    <li>{{ user().login }} - {{ user().email }}</li>
  `
})
export class UserItem {
  readonly user = input.required<User>();
}
