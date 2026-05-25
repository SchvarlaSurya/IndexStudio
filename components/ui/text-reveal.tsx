"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "word" | "char" | "line";
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  splitBy = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = splitBy === "char" ? children.split("") : children.split(" ");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: splitBy === "char" ? 0.02 : 0.06,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className="inline"
      >
        {splitBy === "word" ? (
          items.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                variants={itemVariants}
                className="inline-block"
              >
                {word}
                {i < items.length - 1 && " "}
              </motion.span>
            </span>
          ))
        ) : (
          items.map((char, i) => (
            <motion.span key={i} variants={itemVariants} className="inline-block">
              {char === " " ? " " : char}
            </motion.span>
          ))
        )}
      </motion.div>
    </div>
  );
}

// Gradient text animation
export function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent animate-gradient bg-300">
        {children}
      </span>
    </span>
  );
}

// Scroll text animation (parallax)
export function ParallaxText({
  children,
  className = "",
  speed = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <motion.div
      className={`will-change-transform ${className}`}
      style={{ willChange: "transform" }}
      whileInView={{ y: 0 }}
      initial={{ y: 0 }}
    >
      {children}
    </motion.div>
  );
}