"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { ArrowLeft, CalendarDays } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function renderMarkdownContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  function parseLinksInText(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      const url = match[2];
      const isExternal = url.startsWith("http");

      if (isExternal) {
        parts.push(
          <a
            key={`link-${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F97066] hover:text-[#E85D53] underline"
          >
            {linkText}
          </a>
        );
      } else {
        parts.push(
          <Link
            key={`link-${match.index}`}
            href={url}
            className="text-[#F97066] hover:text-[#E85D53] underline"
          >
            {linkText}
          </Link>
        );
      }
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={i}
          className="text-3xl font-bold text-slate-900 mt-8 mb-4"
        >
          {line.replace("# ", "")}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold text-slate-900 mt-8 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl font-bold text-slate-900 mt-6 mb-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        const itemText = lines[i].replace("- ", "");
        listItems.push(
          <li key={i} className="text-slate-600">
            {parseLinksInText(itemText)}
          </li>
        );
        i++;
      }
      i--;
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside text-slate-600 mb-6 space-y-2">
          {listItems}
        </ul>
      );
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed mb-6">
          {parseLinksInText(line)}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white antialiased">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category */}
          <div className="inline-block mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#F97066] bg-[#F97066]/10 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <span>•</span>
            <span className="font-medium">{post.author}</span>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {renderMarkdownContent(post.content)}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 border-t border-slate-200 pt-8"
        >
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Previous Post
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-[#F97066] transition-colors line-clamp-2">
                {previousPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all md:text-right"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Next Post
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-[#F97066] transition-colors line-clamp-2">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#F97066]/10 to-[#FB923C]/10 border border-[#F97066]/20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Ready to streamline your daycare?
          </h3>
          <p className="text-slate-600 mb-6">
            Giggle N Shine helps daycare owners reduce paperwork, improve
            communication, and focus on what matters most.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-full px-8 h-12 flex items-center justify-center font-medium transition-all duration-300 shadow-lg shadow-[#F97066]/25 hover:shadow-[#F97066]/40"
          >
            Request a Demo
          </Link>
        </motion.div>
      </article>
    </main>
  );
}
