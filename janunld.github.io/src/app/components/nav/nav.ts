import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Tag } from '../tag/tag';

export interface NavLink {
  activeOptions?: RouterLinkActive['routerLinkActiveOptions'];
  routerLink: RouterLink['routerLink'];
  label: string;
}

@Component({
  selector: 'jun-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Tag],
  styleUrl: 'nav.css',
  template: `
    <nav>
      @for (link of links(); track link.routerLink) {
        <a
          [routerLink]="link.routerLink"
          [routerLinkActiveOptions]="link.activeOptions ?? { exact: false }"
          routerLinkActive="active"
        >
          <span>{{ link.label }}</span>
        </a>
      }
    </nav>
  `,
})
export class Nav {
  readonly links = input<NavLink[]>([
    { label: 'Bio', routerLink: '/', activeOptions: { exact: true } },
    { label: 'Blog', routerLink: '/blog' },
    // { label: 'Projects', routerLink: '/projects' },
    // { label: 'Art', routerLink: '/art' },
  ]);
}
