export interface BlogPostAttributes {
  draft?: boolean;
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  date: string;
  tags?: string[];
}
