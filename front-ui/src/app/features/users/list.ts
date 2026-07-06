import { Component, inject, signal } from '@angular/core';
import { UserStore } from './service';
import { RouterLink } from '@angular/router'
import { EditUser } from './edit'
import { UserItem } from './item'

import { User } from './service';
@Component({
  selector: 'user-list',
  imports: [RouterLink, EditUser, UserItem],
  templateUrl: './list.html'
})
export class UserList {
  readonly userStore = inject(UserStore);
  users = this.userStore.users!
  isEditing = signal(false)
  editUserId = signal(0)

  
}
