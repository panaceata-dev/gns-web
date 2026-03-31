"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CircleCheck, Loader } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F97066]/3 rounded-full blur-3xl" />

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
            Get in Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Request a demo today and witness the difference firsthand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left – Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CircleCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full h-12 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your daycare..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/20 resize-none transition-all"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-xl text-base font-semibold shadow-lg shadow-[#F97066]/25 hover:shadow-[#F97066]/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right – Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Dark info card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <a
                      href="tel:+18605932437"
                      className="font-medium hover:text-[#FB923C] transition-colors"
                    >
                      +1 (860) 593-2437
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <span className="font-medium">info@gigglenshine.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Location</div>
                    <span className="font-medium">Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="text-sm text-slate-400 mb-4">Follow us</div>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebook, href: "https://www.facebook.com/Panaceata", label: "Facebook" },
                    { icon: FaInstagram, href: "https://instagram.com/panaceata", label: "Instagram" },
                    { icon: FaYoutube, href: "https://youtube.com/@Panaceata", label: "YouTube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Coral CTA card */}
            <div className="bg-gradient-to-br from-[#F97066] to-[#FB923C] rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Curious?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                See how Giggle N Shine can streamline your operations and enhance
                child development. Request a demo today!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
