export interface BlogPostAttributes {
  draft?: boolean;
  title: string;
  slug: string;
  description: string;
  date: string;
  tags?: string[];
}
