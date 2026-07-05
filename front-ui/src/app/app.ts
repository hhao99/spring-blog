import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex flex-col  min-h-screen bg-gray-50 text-gray-800">
      <header class="container mx-auto flex justify-between items-center">
        <span class="text-xl text-red-800">User Demo app </span>
        <nav class="flex gap-4">
          <a routerLink="/">Home</a>
          <a routerLink="/new">new_user</a>
</nav>
</header>
<main class="container grow mx-auto p-2">
  <router-outlet />
</main>
<footer class="flex justify-center items-center min-h-10 bg-gray-50">
  <h3>&copy; Copyright by Eric @ 2026</h3>
</footer>
    </div>
  `
})
export class App {
}
