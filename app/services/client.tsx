"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Monitor, UtensilsCrossed, Store, Coffee, Scissors, Shirt, Star, Layers, type LucideIcon } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { SERVICES, WA_LINK } from "@/constants";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  UtensilsCrossed,
  Store,
  Coffee,
  Scissors,
  Shirt,
  Building2: Store,
  Star,
};

export function ServicesPageClient() {
  return (
    <MainLayout>
      <div className="relative min-h-screen bg-void overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] shape-orb shape-orb-white opacity-20 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] shape-orb shape-orb-smoke opacity-15 blur-[120px]" />

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
                <Layers className="w-4 h-4 text-white/60" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Layanan</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Solusi Digital
                <br />
                <span className="text-gray-500">untuk Bisnis Anda</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Website premium yang dirancang khusus untuk kebutuhan UMKM Indonesia. Modern, responsif, dan mudah dikelola.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon] || Star;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="card-glow rounded-2xl p-8 h-full group transition-all duration-300">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors"
                          >
                            <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
                          </motion.div>

                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                              {service.description}
                            </p>

                            {/* Benefits */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {service.benefits.slice(0, 3).map((benefit, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400"
                                >
                                  <Check className="w-3 h-3 text-white/50" />
                                  {benefit}
                                </span>
                              ))}
                            </div>

                            {/* CTA */}
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors"
                            >
                              <span>Tanya Detail</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl" />

              <div className="relative glass rounded-3xl p-10 lg:p-14 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Bingung pilih layanan yang tepat?
                </h2>

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                  Konsultasi gratis dengan tim kami. Kami bantu cari solusi terbaik untuk bisnis Anda.
                </p>

                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-void px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat WhatsApp Sekarang</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}