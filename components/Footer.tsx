"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const quickLinks = ["Home", "About Us", "Features", "Testimonials", "Contact"];

const social = [
  { icon: FaFacebook, href: "https://www.facebook.com/Panaceata", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/panaceata", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com/@Panaceata", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Giggle N Shine"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Giggle N Shine</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner in streamlined daycare operations. Redefining
              daycare excellence together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="tel:+18605932437"
                  className="hover:text-white transition-colors"
                >
                  +1 (860) 593-2437
                </a>
              </li>
              <li>Sri Lanka</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Giggle N Shine by Panaceata. All
            rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-[#F97066] fill-[#F97066]" />{" "}
            for childcare
          </p>
        </div>
      </div>
    </footer>
  );
}
