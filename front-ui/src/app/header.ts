import { Component, input } from '@angular/core';
import {  RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [ RouterLink],
  template: `
    
    <header class="container mx-auto flex justify-between items-center">
    <span class="text-xl text-red-800">{{title()}}</span>
    <nav class="flex gap-4">
        <a routerLink="/">Home</a>
        <a routerLink="/new">new_user</a>
    </nav>
    </header>

  `
})
export class Header {
    readonly title = input("default title")

}
