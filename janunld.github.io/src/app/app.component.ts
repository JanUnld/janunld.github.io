import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components';

@Component({
  selector: 'jun-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  styleUrl: 'app.component.css',
  template: `
    <header class="container">
      <jun-nav></jun-nav>
    </header>
    <router-outlet></router-outlet>
    <footer class="container text-xs text-neutral-500">
      <p>© {{ copyrightYear }}</p>
    </footer>
  `,
})
export class AppComponent {
  readonly copyrightYear = new Date().getFullYear();
}
