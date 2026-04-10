"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { getAllBlogPosts } from "@/lib/blog";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-white antialiased">
      <Navbar />
      <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#F97066] tracking-wide uppercase">
            Blog
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Insights for Daycare{" "}
            <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
              Owners
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Tips, strategies, and insights to help you run your daycare more
            efficiently
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="inline-block">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#F97066] bg-[#F97066]/10 rounded-full mb-4">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-[#F97066] transition-colors">
                  {post.title}
                </h2>
              </Link>

              {/* Meta Information */}
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
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
                <span>{post.author}</span>
              </div>

              {/* Excerpt */}
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-[#F97066] hover:text-[#E85D53] transition-colors group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-slate-500">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
      </div>
    </main>
  );
}
