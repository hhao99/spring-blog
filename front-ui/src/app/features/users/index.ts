import { Component } from '@angular/core';
import { UserList } from './list';
@Component({
  selector: 'user-app',
  imports: [UserList],
  template: `
    <h1>User Demo</h1>
    <user-list />
  `
})
export class UserApp {}
