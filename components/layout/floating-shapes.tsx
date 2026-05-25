"use client";

import { motion } from "framer-motion";

interface FloatingShapesProps {
  className?: string;
}

export function FloatingShapes({ className = "" }: FloatingShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Circle 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-xl"
      />

      {/* Circle 2 */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/20 blur-xl"
      />

      {/* Circle 3 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-xl"
      />

      {/* Square 1 */}
      <motion.div
        animate={{
          rotate: [45, 55, 45],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400/15 to-rose-400/15 blur-lg rotate-45"
      />

      {/* Square 2 */}
      <motion.div
        animate={{
          rotate: [45, 35, 45],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1/3 right-10 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400/15 to-indigo-400/15 blur-lg rotate-12"
      />

      {/* Small dots */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 w-3 h-3 rounded-full bg-indigo-400/40"
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-1/4 left-20 w-2 h-2 rounded-full bg-orange-400/50"
      />

      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-10 w-2.5 h-2.5 rounded-full bg-purple-400/40"
      />

      {/* Triangle */}
      <motion.svg
        animate={{
          y: [0, -12, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute top-60 left-1/3 w-10 h-10 text-indigo-300/30"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 22h20L12 2z" />
      </motion.svg>

      {/* Ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full border-2 border-dashed border-indigo-300/20"
      />
    </div>
  );
}