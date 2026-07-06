import { Component, inject } from '@angular/core';
import { User } from './service';
import { UserStore } from './service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'user-item',
  imports: [],
  template: `
    <div>
      <h3>User Detail for {{user?.login}}</h3>
      <div>
        <h3>User Email: {{user?.email}}</h3>
        <h5>UserId: {{userId}}</h5>
      </div>
      <button (click)="onDelete()">Delete this user</button>
    </div>
  `
})
export class UserDetail {
  readonly userStore = inject(UserStore);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router)
  readonly userId: number|undefined
  readonly user: User| undefined

  constructor() {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.user = this.userStore.users.value()?.find( (user: User) => user.id === this.userId)
  }

  async onDelete() {
    await this.userStore.deleteUser(this.userId!)
    this.router.navigate(['/'])
  }


  
}
