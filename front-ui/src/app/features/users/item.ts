import { Component, input } from '@angular/core';
import { User } from './service';
import { UserStore } from './service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'user-item',
  imports: [],
  template: `
    <li class="flex justify-between gap-4">
      <div>{{user().id}}</div>
      <div>{{user().login}}</div>
      <div>{{user().email}}</div>
    </li>
  `
})
export class UserItem{
  readonly user = input.required<User>()
}