import { Component, inject, input, signal, OnInit } from '@angular/core';
import { form, FormField, FormRoot,email } from '@angular/forms/signals';
import { UserStore, User } from './service';


@Component({
  selector: 'edit-user',
  imports: [FormField, FormRoot],
  template: `
    <div class="w-full max-w-md mx-auto p-4 border rounded">
      <h3>update user</h3>
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
export class EditUser {
  readonly userStore = inject(UserStore)
  readonly user = input.required<User>()
  UserModel = signal<User>({
    id: 0,
    login: '',
    email: ''
  });
  newUserForm = form(this.UserModel,{
    submission: {
      action: async (field)=> {
      console.log("submiting...",field().value())
      this.userStore.addUser(field().value())
      }
    }
  });

}
