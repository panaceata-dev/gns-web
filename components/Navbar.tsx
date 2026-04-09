"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", isAnchor: true },
  { label: "About", href: "#about", isAnchor: true },
  { label: "Features", href: "#features", isAnchor: true },
  { label: "Testimonials", href: "#testimonials", isAnchor: true },
  { label: "Blog", href: "/blog", isAnchor: false },
  { label: "Contact", href: "#contact", isAnchor: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If element doesn't exist on current page, navigate to home with anchor
      window.location.href = "/" + href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-[#F97066]/20 group-hover:shadow-[#F97066]/40 transition-shadow">
              <Image
                src="/logo.png"
                alt="Giggle N Shine Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Giggle N Shine
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.isAnchor ? (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-50 transition-all duration-200"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-50 transition-all duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-full px-6 h-11 font-medium shadow-lg shadow-[#F97066]/25 hover:shadow-[#F97066]/40 transition-all duration-300"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) =>
                item.isAnchor ? (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full bg-gradient-to-r from-[#F97066] to-[#FB923C] text-white rounded-full h-12 font-medium"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
