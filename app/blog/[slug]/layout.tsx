import type { Metadata } from "next";
import { getBlogPost } from "@/lib/blog";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Omit<BlogPostLayoutProps, "children">): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: "How to Reduce Paperwork in Your Daycare | Giggle N Shine",
    description:
      "Discover how independent daycare owners can eliminate paperwork with digital attendance, automated billing, and parent communication tools.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.gigglenshine.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
}
