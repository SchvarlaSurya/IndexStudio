"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants";
import { SectionReveal } from "@/components/ui/page-transition";

export function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Quote className="w-4 h-4 text-white/60" />
            </motion.div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Testimoni</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Kata Klien Kami
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Mereka yang sudah merasakan kualitas layanan IndexStudio.
          </p>
        </SectionReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div
        className="card-glow rounded-2xl p-8 h-full cursor-pointer"
        whileHover={{
          y: -4,
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.4), 0 0 100px -20px rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        data-cursor="Read"
      >
        {/* Quote Icon */}
        <motion.div
          className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
        >
          <Quote className="w-5 h-5 text-white/40" />
        </motion.div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <Star className="w-4 h-4 text-white fill-white" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </motion.p>

        {/* Author */}
        <motion.div
          className="flex items-center gap-4 pt-6 border-t border-white/5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-lg font-semibold text-white">
              {testimonial.name.charAt(0)}
            </span>
          </motion.div>
          <div>
            <div className="font-medium text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.business}</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}