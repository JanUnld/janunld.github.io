import { ContentFile, injectContentFiles } from '@analogjs/content';
import { DatePipe, NgFor } from '@angular/common';
import { Component, isDevMode } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagComponent } from '../../components';
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
  imports: [RouterLink, NgFor, DatePipe, TagComponent],
  styleUrl: 'blog.page.css',
  template: `
    @for (post of posts; track post.slug) {
      <div class="blog-post-preview" [routerLink]="['/blog', post.slug]">
        <div class="container">
          <div class="blog-post-title">
            <span>{{ post.attributes.title }}</span>
            @if (post.attributes.draft) {
              <jun-tag variant="warning">draft</jun-tag>
            }
          </div>
          <div class="blog-post-description">
            {{ post.attributes.description }}
          </div>
          <div class="blog-post-date">{{ post.attributes.date | date }}</div>
          @if (post.attributes.tags?.length) {
            <div class="blog-post-tags">
              @for (tag of post.attributes.tags; track tag) {
                <jun-tag>{{ tag }}</jun-tag>
              }
            </div>
          }
        </div>
      </div>
    }
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<BlogPostAttributes>(isBlogPostAvailable);
}
