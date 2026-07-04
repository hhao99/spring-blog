import { Component, inject, OnInit } from '@angular/core';
import { UserStore } from './users.servce';

import { User } from './users.servce';
import { UserItem } from './item';
@Component({
  selector: 'user-list',
  imports: [UserItem],
  template: `
  <div>
    <h2>Users List</h2>
    <ul>
      @for( user of userStore.users(); track user.id) {
        <user-item [user]="user" />
      } @empty {
        @if(userStore.loading()) {
          <li>Loading users...</li>
        } @else {
          <li>No users found.</li>
        }
      }
    </ul>
  </div>
  `
})
export class UserList implements OnInit {
  readonly userStore = inject(UserStore);

  ngOnInit(): void {
    this.userStore.fetchUsers();
  }
}
