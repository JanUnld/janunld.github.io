import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TagComponent } from './tag.component';

export interface NavLink {
  activeOptions?: RouterLinkActive['routerLinkActiveOptions'];
  routerLink: RouterLink['routerLink'];
  disabled?: boolean;
  label: string;
}

@Component({
  selector: 'jun-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TagComponent],
  styleUrl: 'nav.component.css',
  template: `
    <nav>
      @for (link of links(); track link.routerLink) {
        <a
          [routerLink]="link.routerLink"
          [routerLinkActiveOptions]="link.activeOptions ?? { exact: false }"
          routerLinkActive="active"
          [class.disabled]="link.disabled"
        >
          <span>{{ link.label }}</span>
          @if (link.disabled) {
            <jun-tag variant="muted">coming soon</jun-tag>
          }
        </a>
      }
    </nav>
  `,
})
export class NavComponent {
  readonly links = input<NavLink[]>([
    { label: 'Bio', routerLink: '/', activeOptions: { exact: true } },
    { label: 'Blog', routerLink: '/blog' },
    { label: 'Art', routerLink: '/art', disabled: true },
  ]);
}
