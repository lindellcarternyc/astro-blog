import type { Post } from "../interfaces/post";

export const getUniqueTags = (posts: Post[]): string[] => {
  return [...new Set(posts.map((post) => post.frontmatter.tags).flat())].filter(
    (tag) => tag !== undefined
  ) as string[];
};
