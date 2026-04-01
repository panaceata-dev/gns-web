"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const points = [
  "Streamline and automate every aspect of operations",
  "Devote energy to what truly matters: nurturing children",
  "Say goodbye to paperwork and tedious organization",
  "Create a thriving environment for children and staff",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97066]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left – image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Rotated bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#F97066]/10 rounded-[2rem] transform -rotate-3" />
            {/* Image card */}
            <div className="relative bg-white rounded-[2rem] p-2 shadow-xl border border-slate-100">
              <Image
                src="/about.png"
                alt="Children learning"
                width={600}
                height={420}
                className="w-full h-[420px] object-cover rounded-[1.7rem]"
              />
            </div>
            {/* 10+ badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F97066] to-[#FB923C] rounded-3xl flex items-center justify-center shadow-xl shadow-[#F97066]/30">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-xs font-medium opacity-90">Years Exp</div>
              </div>
            </div>
          </motion.div>

          {/* Right – text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-sm font-semibold text-[#F97066] tracking-wide uppercase">
              About Us
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
                Giggle N Shine?
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Welcome to Panaceata, the innovative solution that revolutionizes
              the way you manage your daycare institute. More than just a
              management tool, Giggle N Shine is a reliable companion that
              streamlines and automates every aspect of your institute&apos;s
              operations.
            </p>

            <div className="mt-10 space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CircleCheck className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-base text-slate-600">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
