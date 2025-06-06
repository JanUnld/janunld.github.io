import { Component, input } from '@angular/core';

export type TagVariant = 'default' | 'muted' | 'warning' | 'error';

@Component({
  standalone: true,
  selector: 'jun-tag',
  styleUrl: 'tag.css',
  template: ` @if (pulse()) {
      <span class="pulse"></span>
    }
    <span class="pill">
      <ng-content></ng-content>
    </span>`,
})
export class Tag {
  readonly variant = input<TagVariant>('default');
  readonly pulse = input<boolean>(false);
}
