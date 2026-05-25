"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Check, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { TEMPLATES, WA_LINK } from "@/constants";

const features = [
  "Desain responsif mobile",
  "Loading cepat < 3 detik",
  "SEO friendly",
  "SSL certificate",
  "Custom colors & fonts",
  "Revisi unlimited",
  "Support 3-6 bulan",
  "Integrasi WhatsApp",
  "Google Maps",
  "Sosial media links",
  "Optimasi gambar",
  "Backup berkala",
];

export function TemplatesPageClient() {
  return (
    <MainLayout>
      <div className="relative min-h-screen bg-void overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] shape-orb shape-orb-white opacity-15 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] shape-orb shape-orb-smoke opacity-10 blur-[120px]" />

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
                <span className="text-sm text-gray-400 uppercase tracking-wider">Portfolio</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Hasil Kerja Kami
                <br />
                <span className="text-gray-500">yang Kami Banggakan</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Project yang telah kami kerjakan untuk berbagai bisnis lokal Indonesia. Setiap website dibuat dengan penuh perhatian.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEMPLATES.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="card-glow rounded-2xl overflow-hidden h-full group transition-all duration-300">
                    {/* Preview */}
                    <div className={`aspect-[4/3] ${template.gradient} relative overflow-hidden`}>
                      {/* Mock Website */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[70%] bg-obsidian/80 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                          {/* Browser Bar */}
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                          </div>
                          {/* Content */}
                          <div className="space-y-2">
                            <div className="h-4 w-16 bg-white/10 rounded" />
                            <div className="h-8 w-full bg-gradient-to-br from-white/10 to-white/5 rounded-lg" />
                            <div className="h-2 w-3/4 bg-white/10 rounded" />
                            <div className="h-6 w-24 bg-white/20 rounded mt-4" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-void/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white text-void rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span>Preview</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 uppercase tracking-wider mb-3">
                        {template.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/80 transition-colors">
                        {template.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 lg:p-14"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
                Semua template termasuk fitur
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl" />

              <div className="relative glass rounded-3xl p-10 lg:p-14 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Punya ide template sendiri?
                </h2>

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                  Nggak lihat yang cocok? Tenang, kami bisa bikin custom sesuai visi bisnis Anda.
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
                    <span>Konsultasi Gratis</span>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <span>Lihat Harga</span>
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