import { Component, input } from '@angular/core';

export type SocialLink = {
  icon: string;
  href: string;
};

@Component({
  selector: 'jun-social-links',
  standalone: true,
  template: `
    <div class="flex items-center text-2xl">
      @for (link of links(); track link.href) {
        <a
          [href]="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-2 px-2"
        >
          <i class="{{ link.icon }}"></i>
        </a>
      }
    </div>
  `,
})
export class SocialLinks {
  readonly links = input<SocialLink[]>([
    { icon: 'iconoir-github', href: 'https://github.com/JanUnld' },
    { icon: 'iconoir-linkedin', href: 'https://www.linkedin.com/in/janunld/' },
  ]);
}
