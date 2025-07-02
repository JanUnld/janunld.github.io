import { ContentFile, injectContentFiles } from '@analogjs/content';
import { DatePipe } from '@angular/common';
import { Component, computed, isDevMode, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoContent, Tag } from '../../components';
import { BlogPostAttributes } from './models';

function shouldBlogPostPreviewBeVisible(
  file: ContentFile<BlogPostAttributes>,
  showDrafts = true,
) {
  return (
    // Do not show draft blog posts in production
    ((isDevMode() && showDrafts) || !file.attributes.draft) &&
    file.filename.includes('/src/content/blog/')
  );
}

function compareBlogPostDates(
  a: ContentFile<BlogPostAttributes>,
  b: ContentFile<BlogPostAttributes>,
) {
  return Date.parse(b.attributes.date) - Date.parse(a.attributes.date);
}

@Component({
  selector: 'jun-blog',
  standalone: true,
  imports: [RouterLink, DatePipe, Tag, NoContent],
  styleUrl: 'blog.css',
  template: `
    @if (isDevMode) {
      <div
        class="container flex items-center justify-end mb-4 select-none text-sm"
      >
        <div>
          <label
            class="cursor-pointer text-sm mr-2 flex items-center group"
            for="blog-draft-toggle"
          >
            <span>{{ showDrafts() ? 'Hide' : 'Show' }} drafts</span>
            <i
              class="ml-2 text-lg text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 {{
                showDrafts() ? 'iconoir-eye-closed' : 'iconoir-eye-solid'
              }}"
            ></i>
          </label>
          <input
            (input)="showDrafts.set($any($event.target)?.checked)"
            [checked]="showDrafts()"
            id="blog-draft-toggle"
            type="checkbox"
            hidden
          />
        </div>
      </div>
    }
    @for (post of posts(); track post.slug) {
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
    @if (!posts().length) {
      <div class="container">
        <jun-no-content class="my-12"></jun-no-content>
      </div>
    }
  `,
})
export default class BlogComponent {
  private readonly _posts = injectContentFiles<BlogPostAttributes>();

  readonly isDevMode = isDevMode();
  readonly showDrafts = signal(true);
  readonly posts = computed(() =>
    this._posts
      .filter((post) => shouldBlogPostPreviewBeVisible(post, this.showDrafts()))
      .sort(compareBlogPostDates),
  );
}
