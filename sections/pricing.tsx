"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Star, Zap, MessageCircle } from "lucide-react";
import { PRICING_TIERS } from "@/constants";
import { SectionReveal } from "@/components/ui/page-transition";

export function PricingSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss to-void" />

      {/* Soft Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-white/60" />
            </motion.div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Harga</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Harga yang
            <br />
            <span className="text-gray-500">Terjangkau & Jujur</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Fokus pada yang dibutuhkan bisnis Anda. Tanpa fitur berlebihan yang tidak perlu.
          </p>
        </SectionReveal>

        {/* Trust Statement */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            Hosting termasuk jika website menggunakan Next.js.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        {/* Honest Footer */}
        <SectionReveal delay={0.2}>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 lg:p-10 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 text-left">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <MessageCircle className="w-6 h-6 text-white/60" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Butuh paket khusus?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Harga bisa disesuaikan dengan kebutuhan spesifik bisnis Anda. Konsultasi gratis untuk diskusi lebih lanjut.
                  </p>
                  <a
                    href="https://wa.me/6285184633733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors"
                    data-cursor="Chat"
                  >
                    <span>Chat WhatsApp</span>
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionReveal>

        {/* Trust Badges */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { text: "Revisi sampai puas" },
            { text: "Proses cepat" },
            { text: "Harga transparan" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-2 text-gray-500 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  index,
}: {
  tier: (typeof PRICING_TIERS)[number];
  index: number;
}) {
  const isHighlighted = tier.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative"
    >
      {/* Popular Badge */}
      {isHighlighted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-void text-xs font-semibold rounded-full">
            <Star className="w-3 h-3" />
            <span>Paling Populer</span>
          </div>
        </motion.div>
      )}

      <motion.div
        className={`rounded-2xl p-8 h-full transition-all duration-300 ${
          isHighlighted
            ? "bg-white/5 border-2 border-white/20"
            : "glass"
        }`}
        whileHover={{
          y: -4,
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.4)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isHighlighted ? "bg-white/10" : "bg-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {isHighlighted ? (
                <Sparkles className="w-6 h-6 text-white" />
              ) : (
                <Zap className="w-6 h-6 text-white/60" />
              )}
            </motion.div>
            <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
          </div>

          <div className="mb-2">
            <motion.div
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2 }}
            >
              {tier.price}
            </motion.div>
          </div>

          <p className="text-sm text-gray-400">
            {tier.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
            >
              <motion.div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isHighlighted ? "bg-white/20" : "bg-white/10"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <Check className="w-3 h-3 text-white" />
              </motion.div>
              <span className="text-sm text-gray-400">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="https://wa.me/6285184633733"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`block text-center py-3.5 rounded-full font-semibold transition-all duration-300 ${
            isHighlighted
              ? "bg-white text-void hover:shadow-lg hover:shadow-white/20"
              : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
          }`}
          data-cursor="Chat"
        >
          {tier.cta}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}