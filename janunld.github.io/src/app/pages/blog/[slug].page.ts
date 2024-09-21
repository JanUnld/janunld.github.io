import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TagComponent } from '../../components';
import { BlogPostAttributes } from '../../models';

// noinspection AngularInvalidImportedOrDeclaredSymbol,HtmlUnknownTag
@Component({
  selector: 'jun-blog-post',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, TagComponent, DatePipe],
  styleUrl: 'blog-post.page.css',
  template: `
    @if (post$ | async; as post) {
      <div class="container flex items-center justify-between">
        <div>
          <h1 class="text-3xl">{{ post.attributes.title }}</h1>
        </div>

        <div class="flex items-center">
          @if (post.attributes.draft) {
            <jun-tag variant="warning">draft</jun-tag>
          }
          <time class="text-xs text-neutral-500 ml-2">{{
            post.attributes.date | date: 'mediumDate'
          }}</time>
        </div>
      </div>
      <div class="container">
        <h2 class="mt-2 text-xl font-normal text-neutral-500">
          {{ post.attributes.description }}
        </h2>
      </div>
      @if (post.attributes.coverImage) {
        <img [src]="post.attributes.coverImage" alt="Blog post cover image" />
      }
      <div class="container">
        <analog-markdown [content]="post.content"></analog-markdown>

        @if (post.attributes.tags?.length) {
          <div class="blog-post-tags">
            @for (tag of post.attributes.tags; track tag) {
              <jun-tag>{{ tag }}</jun-tag>
            }
          </div>
        }
      </div>
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<BlogPostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });
}
