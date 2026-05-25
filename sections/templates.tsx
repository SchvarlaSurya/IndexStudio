"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TEMPLATES } from "@/constants";
import { StaggerReveal, StaggerItem, SectionReveal } from "@/components/ui/page-transition";

export function TemplatesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-void to-abyss" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <motion.span
                className="text-sm text-gray-400 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Portfolio
              </motion.span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hasil Kerja Kami
            </h2>
            <p className="text-lg text-gray-400 max-w-xl">
              Project yang telah kami kerjakan untuk berbagai bisnis lokal Indonesia.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/templates"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-6 lg:mt-0"
              data-cursor="View"
            >
              <span>Lihat semua project</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </SectionReveal>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TemplateCard template={template} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateCard({
  template,
  index,
}: {
  template: (typeof TEMPLATES)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group card-glow rounded-2xl overflow-hidden h-full cursor-pointer"
      whileHover={{
        y: -8,
        boxShadow: "0 30px 60px -15px rgba(0,0,0,0.4), 0 0 100px -20px rgba(255,255,255,0.1)",
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      data-cursor="View"
    >
      {/* Preview Image */}
      <div className={`aspect-[4/3] ${template.gradient} relative overflow-hidden`}>
        {/* Mock Website */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[80%] h-[70%] bg-obsidian/80 backdrop-blur-sm rounded-xl border border-white/10 p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          >
            {/* Browser Bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            {/* Content */}
            <div className="space-y-2">
              <motion.div
                className="h-4 w-16 bg-white/10 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              />
              <motion.div
                className="h-8 w-full bg-gradient-to-br from-white/10 to-white/5 rounded-lg"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
              />
              <motion.div
                className="h-2 w-3/4 bg-white/10 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
              />
              <motion.div
                className="h-6 w-24 bg-white/20 rounded mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-void/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 bg-white text-void rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Preview</span>
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Index Number */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-void/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <span className="text-xs font-mono text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 uppercase tracking-wider mb-3"
          whileHover={{ scale: 1.02 }}
        >
          {template.category}
        </motion.span>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/80 transition-colors">
          {template.title}
        </h3>
        <p className="text-sm text-gray-500">
          {template.description}
        </p>
      </div>
    </motion.div>
  );
}