import { Component } from '@angular/core';
import { UserList } from './list';
import { UserNew } from './new';
@Component({
  selector: 'user-app',
  imports: [UserList, UserNew ],
  template: `
    <h1>User Demo</h1>
    <user-new />
    <user-list />
  `
})
export class UserApp {}
