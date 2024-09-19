import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BlogPostAttributes } from '../../models';

// noinspection AngularInvalidImportedOrDeclaredSymbol,HtmlUnknownTag
@Component({
  selector: 'jun-blog-post',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
    @if (post$ | async; as post) {
      <h1>{{ post.attributes.title }}</h1>
      <img [src]="post.attributes.coverImage" alt="Blog post cover image" />
      <analog-markdown [content]="post.content"></analog-markdown>
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<BlogPostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });
}
