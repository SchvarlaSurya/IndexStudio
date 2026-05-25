"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Play, Monitor, Zap, Shield } from "lucide-react";
import { WA_LINK } from "@/constants";
import { StaggerReveal, StaggerItem } from "@/components/ui/page-transition";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg-animated opacity-50" />

      {/* Parallax Glowing Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] shape-orb shape-orb-white opacity-30 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] shape-orb shape-orb-smoke opacity-20 blur-[100px]"
      />

      {/* Floating Geometric Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="w-32 h-32 border border-white/10 rounded-2xl rotate-12" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -3, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 border border-white/5 rounded-full" />
      </motion.div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full"
              />
              <span className="text-sm text-gray-400">Available for new projects</span>
            </motion.div>

            {/* Headline with text reveal */}
            <StaggerReveal staggerDelay={0.12} className="mb-6">
              <StaggerItem>
                <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Premium
                  </motion.span>
                </motion.h1>
              </StaggerItem>
              <StaggerItem>
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="text-glow">Digital Studio</span>
                </motion.h1>
              </StaggerItem>
              <StaggerItem>
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <span className="text-gray-500">for UMKM</span>
                </motion.h1>
              </StaggerItem>
            </StaggerReveal>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Membantu bisnis lokal Indonesia membangun kehadiran online yang profesional dan berkelas.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-void px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
                data-cursor="Chat"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.span>
                <span>Konsultasi Gratis</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                  data-cursor="View"
                >
                  <Play className="w-5 h-5" />
                  <span>Lihat Portfolio</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/5"
            >
              {[
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating UI Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Panel */}
            <div className="panel-float p-8 relative">
              {/* Panel Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-white/20"
                  />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/5" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Preview
                </span>
              </div>

              {/* Mock Website Preview */}
              <div className="space-y-4">
                {/* Browser Chrome */}
                <div className="bg-obsidian rounded-xl overflow-hidden border border-white/5">
                  <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {/* Mock Content */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-bold text-white/80">I</span>
                      <div>
                        <motion.div
                          className="h-3 w-24 bg-white/20 rounded mb-2"
                          initial={{ width: 0 }}
                          animate={{ width: 96 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                        />
                        <motion.div
                          className="h-2 w-16 bg-white/10 rounded"
                          initial={{ width: 0 }}
                          animate={{ width: 64 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <motion.div
                        className="h-4 w-full bg-white/10 rounded"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                      />
                      <motion.div
                        className="h-4 w-4/5 bg-white/10 rounded"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.4 }}
                      />
                    </div>
                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="h-10 w-28 bg-white rounded-lg" />
                      <div className="h-10 w-28 bg-white/10 rounded-lg border border-white/20" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Monitor, delay: 1.2 },
                    { icon: Zap, delay: 1.3 },
                  ].map(({ icon: Icon, delay }, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.05)"
                      }}
                      className="bg-obsidian/50 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay }}
                    >
                      <Icon className="w-6 h-6 text-white/60 mb-3" />
                      <motion.div
                        className="h-3 w-20 bg-white/20 rounded mb-1"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ delay: delay + 0.1, duration: 0.3 }}
                      />
                      <div className="h-2 w-14 bg-white/10 rounded" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge - Parallax */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-white">100% Secure</div>
                  <div className="text-xs text-gray-400">SSL Protected</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats - Parallax */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3-21</div>
                <div className="text-xs text-gray-400">Hari Pengerjaan</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}