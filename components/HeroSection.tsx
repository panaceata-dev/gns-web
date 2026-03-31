"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Smartphone } from "lucide-react";

const stats = [
  { icon: Shield, value: "100%", label: "Self-Owned Daycares" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
  { icon: Smartphone, value: "40%", label: "Time Saved" },
];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF1F0]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#F97066]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FB923C]/5 rounded-full blur-3xl" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F97066]/10 to-[#FB923C]/10 border border-[#F97066]/10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-60 right-60 w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 border border-[#8B5CF6]/10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 right-40 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FB923C]/10 to-[#F97066]/5 border border-[#FB923C]/10 hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97066]/10 border border-[#F97066]/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F97066] animate-pulse" />
                <span className="text-sm font-medium text-[#E85D53]">
                  Optimized for Self-Owned Daycares
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight text-slate-900"
            >
              Crafting{" "}
              <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
                Smiles,
              </span>
              <br />
              Managing{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
                Care.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg"
            >
              Your partner in streamlined daycare operations. Efficient
              management, secure care, and boundless opportunities for children
              to learn and thrive.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-full px-8 h-14 text-base font-semibold shadow-xl shadow-[#F97066]/25 hover:shadow-[#F97066]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo("#about")}
                className="flex items-center gap-3 px-6 h-14 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Play className="w-4 h-4 text-slate-600 ml-0.5" fill="currentColor" />
                </div>
                <span className="text-sm font-medium text-slate-600">
                  Learn More
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97066]/20 to-[#FB923C]/20 rounded-[2.5rem] blur-2xl transform rotate-3" />

              {/* Image card */}
              <div className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl shadow-slate-200/50 border border-slate-100">
                <Image
                  src="/hero.png"
                  alt="Happy children in daycare"
                  width={600}
                  height={460}
                  className="w-full h-[460px] object-cover rounded-[2rem]"
                  priority
                />
              </div>

              {/* Floating badge – Safe & Secure */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">
                      Safe & Secure
                    </div>
                    <div className="text-xs text-slate-400">100% Protected</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge – Parent App */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-6 bottom-20 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F97066]/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-[#F97066]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">
                      Parent App
                    </div>
                    <div className="text-xs text-slate-400">Stay Connected</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
