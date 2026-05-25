"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, MapPin, Clock, Check } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WA_LINK } from "@/constants";

export function ContactPageClient() {
  const [formData, setFormData] = useState({ name: "", business: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", business: "", phone: "", message: "" });
    }, 5000);
  };

  return (
    <MainLayout>
      <div className="relative min-h-screen bg-void overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] shape-orb shape-orb-white opacity-15 blur-[150px]" />

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
                <MessageCircle className="w-4 h-4 text-white/60" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Kontak</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Yuk, mulai
                <br />
                <span className="text-gray-500">ngobrol!</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Punya pertanyaan atau mau konsultasi? Tim kami siap bantu kapan saja.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card-glow rounded-2xl p-8 lg:p-10"
              >
                <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  Kirim pesan
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center"
                    >
                      <Check className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">Pesan terkirim!</h3>
                    <p className="text-gray-400">Kami akan segera menghubungi Anda.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Nama</label>
                        <input
                          type="text"
                          placeholder="Nama lengkap"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Bisnis (opsional)</label>
                        <input
                          type="text"
                          placeholder="Nama bisnis Anda"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Nomor WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                      <textarea
                        placeholder="Ceritain kebutuhan website Anda..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 bg-white text-void py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                {/* WhatsApp CTA */}
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl" />
                  <div className="relative card-glow rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                        <MessageCircle className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Chat WhatsApp</h3>
                        <p className="text-gray-500 text-sm">Respon lebih cepat!</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6">
                      Lebih suka chat langsung? Hubungi kami via WhatsApp untuk konsultasi gratis!
                    </p>
                    <motion.a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 bg-white text-void px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Chat Sekarang</span>
                    </motion.a>
                  </div>
                </div>

                {/* Other Contact Methods */}
                <div className="card-glow rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    Cara lain hubungi kami
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="text-xl">📸</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Instagram</p>
                        <p className="text-sm text-gray-500">@indexstudio</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="text-xl">🎵</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">TikTok</p>
                        <p className="text-sm text-gray-500">@indexstudio</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Lokasi</p>
                        <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Jam Operasional</p>
                        <p className="text-sm text-gray-500">Senin - Sabtu, 09:00 - 18:00 WIB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}