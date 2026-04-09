"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is daycare management software and how does it help?",
    answer:
      "Daycare management software is a comprehensive digital platform that streamlines daycare operations. It automates attendance tracking, billing, parent communication, activity logging, and staff scheduling. This reduces administrative burden, minimizes errors, and allows educators to focus more on quality child care and development.",
  },
  {
    id: 2,
    question: "How secure is child data in daycare software?",
    answer:
      "Modern daycare management platforms implement enterprise-grade security including encrypted data storage, secure user authentication, role-based access controls, and compliance with regulations like FERPA and COPPA. All information is protected against unauthorized access and data breaches.",
  },
  {
    id: 3,
    question: "Can parents receive real-time updates about their child's activities?",
    answer:
      "Yes, most daycare software platforms provide parents with real-time access to daily activity reports, photos, developmental milestones, and progress updates through secure mobile and web interfaces. This fosters better communication between educators and families.",
  },
  {
    id: 4,
    question: "Is daycare management software difficult to use?",
    answer:
      "Quality daycare software is designed with user-friendly interfaces specifically for early childhood educators. Most platforms include comprehensive training resources, tutorials, and dedicated customer support to ensure smooth adoption, even for staff with minimal technical experience.",
  },
  {
    id: 5,
    question: "Does daycare software integrate with existing systems?",
    answer:
      "Many daycare management platforms work as comprehensive all-in-one solutions. They also offer API integrations with popular third-party tools for billing, accounting, and payroll systems, ensuring seamless data flow across your operations.",
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/2 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#3B82F6] tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Everything you need to know about daycare management software
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveId(activeId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200"
              >
                <span className="text-left text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    activeId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-100"
                  >
                    <div className="px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-25">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
