import { Component,  } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';

import { Header } from './header'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <div class="flex flex-col  min-h-screen bg-gray-50 text-gray-800">
      <app-header title="User Demo app" />
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
