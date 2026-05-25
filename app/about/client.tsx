"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Rocket, Users, Target, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WA_LINK } from "@/constants";

const values = [
  {
    icon: Target,
    title: "Terjangkau",
    description: "Harga yang pas untuk UMKM Indonesia, nggak perlu mahal untuk punya website keren.",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description: "Setiap project kami kerjakan dengan penuh dedikasi dan perhatian ke detail.",
  },
  {
    icon: Rocket,
    title: "Cepat & Tepat",
    description: "Proses cepat tanpa sacrifice kualitas. Website selesai sesuai deadline.",
  },
  {
    icon: Users,
    title: "Fokus UMKM",
    description: "Kami paham kebutuhan bisnis lokal dan speak same language dengan Anda.",
  },
];

const stats = [
  { number: "100+", label: "Website Dibuat" },
  { number: "50+", label: "Klien Bahagia" },
  { number: "3-21", label: "Hari Pengerjaan" },
  { number: "100%", label: "Kepuasan" },
];

export function AboutPageClient() {
  return (
    <MainLayout>
      <div className="relative min-h-screen bg-void overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-20" />
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
                <Heart className="w-4 h-4 text-white/60" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Tentang Kami</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Kami bantu UMKM Indonesia
                <br />
                <span className="text-gray-500">naik level!</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                IndexStudio adalah tim yang passionate bikin website keren dan terjangkau untuk bisnis lokal Indonesia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Cerita di balik{" "}
                  <span className="text-gray-500">IndexStudio</span>
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Semua dimulai dari sebuah pengamatan sederhana: banyak bisnis lokal Indonesia yang punya produk atau jasa keren, tapi belum punya website yang memadai.
                  </p>
                  <p>
                    Kami lihat banyak cafe yang makanannya enak tapi lokasinya susah ditemukan online. Banyak barbershop yang stylisnya bagus tapi portofolionya berantakan. Banyak laundry yang pelayanannya cepat tapi nggak punya cara gampang buat pelanggan booking.
                  </p>
                  <p>
                    Dari situlah IndexStudio lahir - dengan misi sederhana: bantu bisnis lokal Indonesia punya kehadiran online yang keren dan professional.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-xl" />

                  <div className="relative glass rounded-3xl p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Mulai dari 2023</h3>
                        <p className="text-gray-400">Digital Studio Indonesia</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Sudah membantu 50+ bisnis lokal di Indonesia untuk punya website profesional.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Rocket className="w-4 h-4 text-white/60" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Nilai Kami</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Apa yang kami <span className="text-gray-500">percaya</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="card-glow rounded-2xl p-6 h-full group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors"
                    >
                      <value.icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 lg:p-14"
            >
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <p className="text-gray-500">{stat.label}</p>
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
                  Mulai perjalanan digital bisnis Anda!
                </h2>

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                  Nggak perlu tunggu sempurna. Mulai aja dulu, dan kami bantu sampai selesai.
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
                    <span>Yuk Ngobrol!</span>
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