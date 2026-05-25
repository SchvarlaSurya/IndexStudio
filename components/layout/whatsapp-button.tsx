"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { WA_LINK } from "@/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.15, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat WhatsApp"
    >
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.8],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full"
        animate={{
          scale: [1, 1.5],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Main button */}
      <div
        className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-xl"
        style={{
          boxShadow: "6px 6px 0 0 rgba(0,0,0,0.15), 0 8px 24px rgba(34, 197, 94, 0.4)",
        }}
      >
        <motion.div
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <MessageCircle className="w-8 h-8 text-white relative z-10" />
        </motion.div>

        {/* Sparkle decorations */}
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </motion.div>
        <motion.div
          className="absolute -bottom-1 -left-1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        >
          <span className="text-lg">✨</span>
        </motion.div>
      </div>
    </motion.a>
  );
}