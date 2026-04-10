import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Giggle N Shine",
  description: "Insights and tips for daycare owners",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
