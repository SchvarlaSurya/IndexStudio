"use client";

import { motion } from "framer-motion";

// Floating Star Component
export function FloatingStar({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      animate={{
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#FFD93D"
        stroke="#FF8A00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

// Cute Cloud Component
export function CuteCloud({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      className={className}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <ellipse cx="30" cy="40" rx="25" ry="18" fill="#E8F4FF" />
      <ellipse cx="55" cy="35" rx="30" ry="22" fill="white" />
      <ellipse cx="85" cy="42" rx="22" ry="15" fill="#E8F4FF" />
      <ellipse cx="70" cy="28" rx="20" ry="16" fill="white" />
    </motion.svg>
  );
}

// Playful Blob Shape
export function PlayfulBlob({
  color = "orange",
  size = 200,
  className = "",
}: {
  color?: "orange" | "blue" | "purple" | "coral" | "yellow";
  size?: number;
  className?: string;
}) {
  const colors = {
    orange: "from-orange-400 to-amber-300",
    blue: "from-blue-400 to-cyan-300",
    purple: "from-purple-400 to-pink-300",
    coral: "from-red-400 to-orange-300",
    yellow: "from-yellow-300 to-orange-200",
  };

  return (
    <motion.div
      className={`rounded-full bg-gradient-to-br ${colors[color]} ${className}`}
      style={{ width: size, height: size * 0.8 }}
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// Doodle Circle Decorator
export function DoodleCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={className}
      fill="none"
    >
      <circle cx="20" cy="20" r="18" stroke="#FF8A00" strokeWidth="3" strokeDasharray="8 4" />
    </svg>
  );
}

// Zigzag Divider
export function ZigzagDivider({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" className={className}>
      <path d="M0 15 L10 5 L20 15 L30 5 L40 15 L50 5 L60 15 L70 5 L80 15 L90 5 L100 15" stroke="#FF8A00" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Happy Face Icon
export function HappyFace({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      whileHover={{ scale: 1.2, rotate: 10 }}
    >
      <circle cx="24" cy="24" r="22" fill="#FFD93D" />
      <circle cx="17" cy="20" r="3" fill="#1a1a1a" />
      <circle cx="31" cy="20" r="3" fill="#1a1a1a" />
      <path d="M14 30 Q24 38 34 30" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
    </motion.svg>
  );
}

// Rocket Icon
export function RocketIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <path d="M24 4 L30 16 L40 20 L30 24 L24 44 L18 24 L8 20 L18 16 Z" fill="#FF6B6B" />
      <path d="M24 4 L27 12 L24 16 L21 12 Z" fill="#FF8A00" />
      <circle cx="24" cy="26" r="4" fill="white" />
      <path d="M12 36 L16 28 L20 32 L18 40 Z" fill="#FFD93D" />
      <path d="M36 36 L32 28 L28 32 L30 40 Z" fill="#FFD93D" />
    </motion.svg>
  );
}

// Lightbulb Icon
export function LightbulbIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <path d="M24 4 L28 12 L36 12 L30 20 L32 28 L24 24 L16 28 L18 20 L12 12 L20 12 Z" fill="#FFD93D" stroke="#FF8A00" strokeWidth="2" />
      <rect x="20" y="28" width="8" height="8" rx="2" fill="#845EC2" />
      <rect x="18" y="36" width="12" height="4" rx="2" fill="#845EC2" />
    </motion.svg>
  );
}

// Cute Heart
export function CuteHeart({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      whileHover={{ scale: 1.3 }}
    >
      <path d="M16 28 C6 20 2 14 2 9 C2 4 6 2 10 2 C13 2 15 4 16 6 C17 4 19 2 22 2 C26 2 30 4 30 9 C30 14 26 20 16 28Z" fill="#FF6B6B" />
      <ellipse cx="10" cy="10" rx="4" ry="3" fill="white" opacity="0.6" />
    </motion.svg>
  );
}

// Decorative Dot Pattern
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className={className}>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="3" fill="#FF8A00" opacity="0.3" />
      </pattern>
      <rect width="100" height="100" fill="url(#dots)" />
    </svg>
  );
}

// Floating Plus Signs
export function FloatingPlus({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <path d="M12 5V19M5 12H19" stroke="#845EC2" strokeWidth="4" strokeLinecap="round" />
    </motion.svg>
  );
}

// Cartoon Speech Bubble
export function SpeechBubble({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative bg-white rounded-[24px] p-6 shadow-xl ${className}`}
      whileHover={{ scale: 1.05, rotate: -2 }}
    >
      <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white transform rotate-45" />
      {children}
    </motion.div>
  );
}

// Playful Background Blobs
export function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-300 to-yellow-200 opacity-40 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-300 to-pink-200 opacity-30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-300 to-cyan-200 opacity-30 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-yellow-300 to-orange-200 opacity-35 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}

// Wavy Section Divider
export function WavySection({ flip = false, color = "cream" }: { flip?: boolean; color?: string }) {
  const bgColor = color === "cream" ? "#FFF9F1" : "#ffffff";

  return (
    <div className={`relative ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 120" className="w-full h-auto" preserveAspectRatio="none">
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill={bgColor}
        />
      </svg>
    </div>
  );
}

// Sticker Badge Component
export function StickerBadge({
  children,
  variant = "orange",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "orange" | "blue" | "purple" | "coral" | "yellow";
  className?: string;
}) {
  const variants = {
    orange: "bg-gradient-to-r from-orange-500 to-amber-400 text-white",
    blue: "bg-gradient-to-r from-blue-500 to-cyan-400 text-white",
    purple: "bg-gradient-to-r from-purple-500 to-pink-400 text-white",
    coral: "bg-gradient-to-r from-coral-500 to-peach-400 text-white",
    yellow: "bg-gradient-to-r from-yellow-400 to-orange-300 text-gray-800",
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}