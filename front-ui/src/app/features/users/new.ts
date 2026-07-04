import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot,email } from '@angular/forms/signals';
import { UserStore, NewUser } from './users.servce';


@Component({
  selector: 'user-new',
  imports: [FormField, FormRoot],
  template: `
    <div class="w-full max-w-md mx-auto p-4 border rounded">
      <h3>new user</h3>
      <form [formRoot]="newUserForm">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" [formField]="newUserForm.login" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" [formField]="newUserForm.email" />
        </div>
        
        <button type="submit">Create User</button>
      </form>
    </div>
  `
})
export class UserNew {
  readonly userStore = inject(UserStore)
  newUserModel = signal<NewUser>({
    login: '',
    email: ''
  });
  newUserForm = form(this.newUserModel,{
    submission: {
      action: async (field)=> {
      console.log("submiting...",field().value())
      this.userStore.createUser(field().value())

      }
    }
  });

}
