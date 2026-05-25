"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Sparkles, Zap, Shield, Star } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { PRICING_TIERS, WA_LINK } from "@/constants";

const tierColors = [
  { gradient: "from-gray-600 to-gray-700", icon: Shield },
  { gradient: "from-white to-gray-300", icon: Star },
  { gradient: "from-gray-500 to-gray-600", icon: Sparkles },
];

const includedItems = [
  { icon: Zap, text: "Hosting 1 Tahun" },
  { icon: Shield, text: "SSL Gratis" },
  { icon: Star, text: "Revisi Unlimited" },
  { icon: Sparkles, text: "Support 3-6 Bulan" },
];

export function PricingPageClient() {
  return (
    <MainLayout>
      <div className="relative min-h-screen bg-void overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-[150px]" />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-white/60" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Harga</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Investasi untuk
                <br />
                <span className="text-gray-500">Bisnis Premium</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Harga transparan tanpa biaya tersembunyi. Semua sudah termasuk hosting & support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {PRICING_TIERS.map((tier, index) => {
                const { gradient, icon: Icon } = tierColors[index];
                const isHighlighted = tier.highlighted;

                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -8 }}
                    className={`relative ${isHighlighted ? "md:-mt-4 md:mb-4" : ""}`}
                  >
                    {isHighlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-void text-sm font-semibold rounded-full">
                          <Star className="w-4 h-4" />
                          <span>Paling Laris</span>
                        </div>
                      </div>
                    )}

                    <div className={`card-glow rounded-2xl p-8 h-full ${isHighlighted ? "border-white/20 bg-white/[0.03]" : ""}`}>
                      {/* Header */}
                      <div className="text-center mb-8">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center ${isHighlighted ? "text-void" : ""}`}
                        >
                          <Icon className={`w-8 h-8 ${isHighlighted ? "" : "text-white/60"}`} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                        <div className="text-4xl font-bold text-white mb-1">{tier.price}</div>
                        <div className="text-sm text-gray-500">per project</div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-center mb-8">
                        {tier.description}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-white/5 mb-8" />

                      {/* Features */}
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/contact"
                          className={`block text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                            isHighlighted
                              ? "bg-white text-void hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                              : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                          }`}
                        >
                          {tier.cta}
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-500 font-medium mt-10 text-lg"
            >
              Harga bisa berbeda tergantung kompleksitas project. Konsultasi gratis untuk penawaran terbaik!
            </motion.p>
          </div>
        </section>

        {/* Included Features */}
        <section className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 lg:p-14"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-10">
                Semua paket sudah termasuk
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {includedItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-white/60" />
                    </div>
                    <span className="text-gray-300 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl" />

              <div className="relative glass rounded-3xl p-10 lg:p-14 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Still bingung pilih paket yang mana?
                </h2>

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                  Tenang, tim kami siap bantu konsultasi gratis. Ceritain kebutuhan bisnis Anda.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 bg-white text-void px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat WhatsApp Sekarang</span>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <span>Lihat Detail Layanan</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}