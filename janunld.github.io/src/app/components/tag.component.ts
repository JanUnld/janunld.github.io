import { Component, input } from '@angular/core';

export type TagVariant = 'default' | 'muted' | 'warning';

@Component({
  selector: 'jun-tag',
  standalone: true,
  styleUrl: 'tag.component.css',
  template: ` <ng-content></ng-content> `,
})
export class TagComponent {
  readonly variant = input<TagVariant>('default');
}
