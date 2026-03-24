"use client";

import { motion } from "framer-motion";
import {
  Zap,
  FolderOpen,
  DollarSign,
  Smartphone,
  MessageCircle,
  UtensilsCrossed,
  FileWarning,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Increased Efficiency",
    desc: "Automate attendance tracking, billing, invoicing, and reporting. Save valuable time for quality care.",
    color: "from-[#F97066] to-[#FB923C]",
    bg: "bg-[#F97066]/5",
  },
  {
    icon: FolderOpen,
    title: "Improved Organization",
    desc: "Manage family profiles, medical records, and attendance sheets effortlessly with an intuitive interface.",
    color: "from-[#8B5CF6] to-[#6366F1]",
    bg: "bg-[#8B5CF6]/5",
  },
  {
    icon: DollarSign,
    title: "Financial Transparency",
    desc: "Generate invoices, track payments, and access detailed financial reports for accurate, error-free billing.",
    color: "from-[#10B981] to-[#059669]",
    bg: "bg-[#10B981]/5",
  },
  {
    icon: Smartphone,
    title: "Parent Mobile App",
    desc: "Keep parents connected with daily activities, schedules, and updates through our iOS and Android app.",
    color: "from-[#3B82F6] to-[#2563EB]",
    bg: "bg-[#3B82F6]/5",
  },
  {
    icon: MessageCircle,
    title: "Enhanced Engagement",
    desc: "Dedicated parent portal and integrated chat fosters trust, transparency, and real-time communication.",
    color: "from-[#F59E0B] to-[#D97706]",
    bg: "bg-[#F59E0B]/5",
  },
  {
    icon: UtensilsCrossed,
    title: "Lesson & Meal Plans",
    desc: "Create tailored lesson plans and track meals for each child, respecting dietary needs and preferences.",
    color: "from-[#EC4899] to-[#DB2777]",
    bg: "bg-[#EC4899]/5",
  },
  {
    icon: FileWarning,
    title: "Activity & Incident Reports",
    desc: "Document and track all activities and incidents transparently for effective parent communication.",
    color: "from-[#14B8A6] to-[#0D9488]",
    bg: "bg-[#14B8A6]/5",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white" />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold text-[#F97066] tracking-wide uppercase">
            Features
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
              Excel
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A comprehensive set of features designed to transform the way you
            run your daycare institute.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                i === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}
                >
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                {feature.desc}
              </p>

              {/* Bottom gradient line on hover */}
              <div
                className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
