"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/constants";
import { SectionReveal } from "@/components/ui/page-transition";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss to-void" />

      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <motion.span
              className="text-sm text-gray-400 uppercase tracking-wider"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FAQ
            </motion.span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pertanyaan
            <br />
            <span className="text-gray-500">yang Sering Diajukan</span>
          </h2>
        </SectionReveal>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQ_ITEMS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <motion.div
        className="glass rounded-xl overflow-hidden cursor-pointer"
        whileHover={!isOpen ? { borderColor: "rgba(255,255,255,0.15)" } : undefined}
        transition={{ duration: 0.2 }}
        onClick={onToggle}
        data-cursor="Expand"
      >
        <motion.button
          className="w-full flex items-center justify-between gap-4 p-6 text-left"
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="font-medium text-white"
            animate={{ color: isOpen ? "rgb(255,255,255)" : "rgb(255,255,255)" }}
          >
            {faq.question}
          </motion.span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
          </motion.div>
        </motion.button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0">
                <motion.p
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {faq.answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}