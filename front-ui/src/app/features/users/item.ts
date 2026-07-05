import { Component, input, inject } from '@angular/core';
import { User } from './users.servce';
import { UserStore } from './users.servce';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-item',
  imports: [],
  template: `
    <div>
    <h3>{{user!.login}}</h3>
    <h3>{{user!.email}}</h3>
    <button (click)="onDelete()">x</button>
</div>
  `
})
export class UserDetail {
  readonly userStore = inject(UserStore);
  readonly router = inject(ActivatedRoute);
  readonly userId: number|undefined;
  readonly user: User|undefined;

  constructor() {
    this.userId = parseInt(this.router.snapshot.paramMap.get('id')!)
    this.user = this.userStore.users().find( ({id})=> id === this.userId) 


  }


  onDelete () {
    this.userStore.deleteUser(this.user!.id);
  }
}
