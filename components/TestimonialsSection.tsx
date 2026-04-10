"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FB923C]/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-[#F97066] tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Our Success{" "}
            <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
        </motion.div>

        {/* Single testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-sm">
            {/* Quote icon */}
            <div className="absolute -top-5 left-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F97066] to-[#FB923C] flex items-center justify-center shadow-lg shadow-[#F97066]/25">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
              &ldquo;Since switching to Giggle N Shine, our admin time dropped by 40%. Billing, attendance, and parent updates all in one place — it&apos;s exactly what independent daycare owners need.&rdquo;
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F97066]/20 to-[#FB923C]/20 flex items-center justify-center">
                <span className="text-lg font-bold bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
                  GS
                </span>
              </div>
              <div>
                <div className="font-bold text-slate-900">Independent Daycare Owner</div>
                <div className="text-sm text-slate-400">United States</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
