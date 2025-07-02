import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceHistory } from '../components';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@Component({
  selector: 'jun-bio',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, ExperienceHistory],
  template: `
    <div class="container">
      @if (bio$ | async; as bio) {
        <analog-markdown [content]="bio.content"></analog-markdown>
      }
    </div>
    <div class="container md">
      <h2>Experience</h2>
      <jun-experience></jun-experience>
    </div>
  `,
})
export default class BioComponent {
  // readonly githubUser = inject(GITHUB_USER);
  readonly bio$ = injectContent({ customFilename: 'bio' });
}
