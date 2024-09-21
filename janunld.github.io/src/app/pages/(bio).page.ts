import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GITHUB_USER } from '../api';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@Component({
  selector: 'jun-bio',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  template: `
    <div class="container">
      @if (bio$ | async; as bio) {
        <analog-markdown [content]="bio.content"></analog-markdown>
      }
    </div>
  `,
})
export default class BioComponent {
  // readonly githubUser = inject(GITHUB_USER);
  readonly bio$ = injectContent({ customFilename: 'bio' });
}
