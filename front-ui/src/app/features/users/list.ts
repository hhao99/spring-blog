import { Component, inject, OnInit } from '@angular/core';
import { UserStore } from './users.servce';
import { RouterLink } from '@angular/router'

import { User } from './users.servce';
@Component({
  selector: 'user-list',
  imports: [RouterLink],
  template: `
  <div>
    <h2>Users List</h2>
    <ul>
      @for( user of userStore.users(); track user.id) {
        <a [routerLink]="['/user',user.id]">
        <li class='w-full mx-auto flex justify-between'>
          <span>{{user.login}}</span>
          <span>{{user.email}}</span>
      
        </li>
      </a>
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
