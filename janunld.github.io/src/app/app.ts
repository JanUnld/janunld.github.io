import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav, SocialLinks } from './components';

@Component({
  selector: 'jun-root',
  standalone: true,
  imports: [RouterOutlet, Nav, SocialLinks],
  styleUrl: 'app.css',
  template: `
    @if (isDevMode) {
      <div class="py-4 bg-blue-100 dark:bg-blue-950">
        <div class="container flex items-center text-sm">
          <i
            class="text-lg iconoir-info-circle text-blue-800 dark:text-blue-200"
          ></i>
          <span class="ml-2 text-blue-600 dark:text-blue-400">
            Running in development mode
          </span>
        </div>
      </div>
    }
    <header class="container">
      <jun-nav></jun-nav>
    </header>
    <router-outlet></router-outlet>
    <footer class="container">
      <div>
        made with <span class="text-red-500">♥</span> and
        <a href="https://analogjs.org/" target="_blank">analog</a>
      </div>
      <jun-social-links></jun-social-links>
    </footer>
  `,
})
export class App {
  readonly isDevMode = isDevMode();
}
