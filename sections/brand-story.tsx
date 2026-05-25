"use client";

import { motion } from "framer-motion";
import { Heart, Target, Sparkles, Shield } from "lucide-react";
import { SectionReveal } from "@/components/ui/page-transition";

const values = [
  {
    icon: Target,
    title: "Fokus, Bukan Melebih-lebihkan",
    description: "Kami memilih project dengan bijak. Setiap project mendapat perhatian penuh dari awal hingga akhir.",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Keberpihakan",
    description: "Bisnis lokal Indonesia layak memiliki kehadiran digital yang premium. Kami ada untuk itu.",
  },
  {
    icon: Sparkles,
    title: "Detail yang Dikerjakan Serius",
    description: "Dari typography hingga animasi, setiap detail dirancang agar website terasa berkelas dan profesional.",
  },
  {
    icon: Shield,
    title: "Kualitas, Bukan Kuantitas",
    description: "Kami tidak mengejar jumlah project. Yang kami kejar adalah hasil yang membuat klien bangga.",
  },
];

export function BrandStorySection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-void" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Soft Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Brand Story */}
        <SectionReveal className="text-center mb-20">
          {/* Label */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-white/60" />
            </motion.div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Cerita Kami</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Still Small.
            <br />
            <span className="text-gray-500">Built Seriously.</span>
          </motion.h2>

          {/* Story Text */}
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              IndexStudio masih berada di tahap awal perjalanan kami.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Namun justru karena itu, setiap project kami kerjakan dengan fokus, perhatian, dan kualitas yang maksimal.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Kami percaya bisnis lokal Indonesia заслуживает memiliki kehadiran digital yang modern, profesional, dan berkelas.
            </p>
          </motion.div>
        </SectionReveal>

        {/* Quote Block */}
        <SectionReveal delay={0.1}>
          <motion.div
            className="glass rounded-3xl p-10 sm:p-14 mb-20 text-center relative overflow-hidden"
            whileHover={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Quote */}
            <div className="absolute top-6 left-8 text-8xl text-white/5 font-serif leading-none select-none">
              &ldquo;
            </div>

            <motion.blockquote
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-snug">
                Bukan sekadar website yang terlihat bagus.
              </p>
              <p className="text-lg sm:text-xl text-gray-400">
                Website yang benar-benar membangun kepercayaan pelanggan.
              </p>
            </motion.blockquote>

            {/* Decorative Line */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>
        </SectionReveal>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="group h-full glass rounded-2xl p-8 text-center cursor-pointer"
                whileHover={{
                  y: -4,
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3), 0 0 80px -20px rgba(255,255,255,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <value.icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <SectionReveal delay={0.2}>
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <motion.span
                className="w-2 h-2 bg-white rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-gray-400">
                Saat ini menerima project terbatas untuk menjaga kualitas
              </span>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}