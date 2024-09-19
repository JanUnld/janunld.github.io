import { ContentFile, injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { Component, isDevMode } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlogPostAttributes } from '../../models';

function isBlogPostAvailable(file: ContentFile<BlogPostAttributes>) {
  return (
    // Do not show draft blog posts in production
    (isDevMode() || !file.attributes.draft) &&
    file.filename.includes('/src/content/blog/')
  );
}

@Component({
  selector: 'jun-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]">
          <div>{{ post.attributes.title }}</div>
          <div>{{ post.attributes.description }}</div>
        </a>
      </li>
    </ul>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<BlogPostAttributes>(isBlogPostAvailable);
}
