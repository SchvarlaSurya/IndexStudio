"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Users, Clock, Shield, Star, Rocket } from "lucide-react";
import { SectionReveal } from "@/components/ui/page-transition";

const reasons = [
  { icon: Zap, title: "Cepat & Modern", description: "Website dibuat dengan teknologi terbaru, fast loading dan anti lag untuk pengalaman terbaik." },
  { icon: Heart, title: "Dibuat dengan Cinta", description: "Setiap project kami kerjakan dengan penuh dedikasi dan perhatian ke detail untuk hasil premium." },
  { icon: Users, title: "Fokus UMKM", description: "Kami memahami kebutuhan bisnis lokal Indonesia dan memberikan solusi yang tepat." },
  { icon: Clock, title: "Proses Cepat", description: "Website selesai dalam waktu singkat, siap digunakan dalam hitungan hari kerja." },
  { icon: Shield, title: "Garansi Kepuasan", description: "Revisi unlimited sampai Anda 100% puas dengan hasilnya. Kepuasan Anda prioritas utama." },
  { icon: Star, title: "Konsultasi Gratis", description: "Kami bantu konsultasi gratis untuk memilih solusi terbaik yang sesuai dengan kebutuhan bisnis." },
];

export function WhyChooseSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-4 h-4 text-white/60" />
            </motion.div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Mengapa Kami</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kenapa Harus
            <br />
            <span className="text-gray-500">IndexStudio?</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kami bukan sekadar membuat website. Kami membangun kehadiran digital yang membuat bisnis Anda terlihat premium.
          </p>
        </SectionReveal>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[number];
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
        className="relative group cursor-pointer"
        whileHover={{ y: -4 }}
        data-cursor="View"
      >
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative glass rounded-2xl p-8 h-full">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.3 }}
          >
            <reason.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
          </motion.div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-white mb-3">
            {reason.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {reason.description}
          </p>

          {/* Hover line */}
          <motion.div
            className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}