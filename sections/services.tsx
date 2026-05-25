"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Building2, UtensilsCrossed, Coffee, Scissors, Layers, Globe } from "lucide-react";
import { SectionReveal } from "@/components/ui/page-transition";

const services = [
  { icon: Globe, title: "Website UMKM", desc: "Website lengkap dengan katalog produk, informasi bisnis, dan fitur interaktif untuk pertumbuhan bisnis Anda." },
  { icon: Coffee, title: "Website Cafe", desc: "Tampilan menarik dengan galeri suasana, menu digital, dan sistem reservasi untuk cafe modern." },
  { icon: Scissors, title: "Website Barbershop", desc: "Style premium dengan booking online, portofolio gaya rambut, dan sistem appointment." },
  { icon: UtensilsCrossed, title: "Menu Digital", desc: "Menu interaktif dengan QR code, kategori lengkap, dan update harga real-time untuk F&B." },
  { icon: Monitor, title: "Landing Page", desc: "Halaman promosional yang menarik dan responsif untuk meningkatkan konversi bisnis." },
  { icon: Building2, title: "Company Profile", desc: "Website profil perusahaan yang profesional dengan portfolio showcase lengkap." },
];

export function ServicesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-void" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          {/* Label */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Layers className="w-4 h-4 text-white/60" />
            </motion.div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Layanan Kami</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Solusi Digital
            <br />
            <span className="text-gray-500">untuk Bisnis Anda</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Website premium yang dirancang khusus untuk kebutuhan UMKM Indonesia.
           modern, responsif, dan mudah dikelola.
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <SectionReveal delay={0.2} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-void font-semibold transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
              data-cursor="View"
            >
              <span>Lihat Semua Layanan</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
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
        className="group card-glow rounded-2xl p-8 h-full relative overflow-hidden cursor-pointer"
        whileHover={{
          y: -4,
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.4), 0 0 100px -20px rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        data-cursor="View"
      >
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Icon Glow */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <service.icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors" />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {service.desc}
          </p>

          {/* Link */}
          <motion.div
            className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span>Selengkapnya</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Number indicator */}
        <div className="absolute bottom-4 right-4 text-6xl font-bold text-white/5 select-none">
          {String(index + 1).padStart(2, "0")}
        </div>
      </motion.div>
    </motion.div>
  );
}