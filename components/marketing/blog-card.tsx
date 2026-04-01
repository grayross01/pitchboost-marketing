import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import BlogTag from "./blog-tag";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card fade-up">
      <div className="blog-card-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="blog-meta-sep">&middot;</span>
        <span>{post.readingTime}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <div className="blog-card-tags">
        {post.tags.slice(0, 3).map((tag) => (
          <BlogTag key={tag} tag={tag} />
        ))}
      </div>
    </Link>
  );
}
