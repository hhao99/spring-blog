import { Component } from '@angular/core';

@Component({
  selector: 'users-new',
  imports: [],
  template: `
    <div>
      <h3>new user</h3>
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email">
        </div>
        
        <button type="submit">Create User</button>
      </form>
    </div>
  `
})
export class UsersNew {}
