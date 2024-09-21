import { Component } from '@angular/core';

@Component({
  selector: 'jun-no-content',
  standalone: true,
  styleUrl: './no-content.component.css',
  template: `
    <div class="mr-6 text-neutral-300 dark:text-neutral-700">
      <i class="iconoir-yoga text-5xl"></i>
    </div>
    <div>
      <h1 class="text-2xl mb-2 text-neutral-700 dark:text-neutral-300">
        Nothing here yet
      </h1>
      <p class="text-lg">
        It seems that there's no content, make sure to check back soon, while
        I'm working on it.
      </p>
    </div>
  `,
})
export class NoContentComponent {}