"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WA_LINK } from "@/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-void/90 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center group">
                <span className="text-xl font-bold text-white tracking-tight relative">
                  <span className="relative z-10 transition-all duration-300 group-hover:tracking-wide">
                    Index
                  </span>
                  <span className="text-white/60 transition-all duration-300 group-hover:text-white">
                    Studio
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className={`
                        relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full
                        ${isActive
                          ? "text-white bg-white/8"
                          : "text-gray-400 hover:text-white/90 hover:bg-white/6"
                        }
                      `}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      data-cursor={isActive ? undefined : "View"}
                    >
                      {link.label}
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-white/8 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      {/* Hover underline */}
                      {!isActive && (
                        <motion.span
                          className="absolute -bottom-1 left-1/2 h-[1px] bg-white/30 rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          whileHover={{ width: "60%", x: "-50%" }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:inline-flex items-center gap-2 bg-white text-void px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200"
                data-cursor="Chat"
              >
                <motion.span
                  initial={{ scale: 1 }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <MessageCircle className="w-4 h-4" />
                </motion.span>
                <span>Konsultasi</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/6 border border-white/8 hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor="Menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0, scale: isMobileMenuOpen ? 0.9 : 1 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-[18px] h-[18px] text-white" />
                  ) : (
                    <Menu className="w-[18px] h-[18px] text-white" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-void/80 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-x-0 top-0 z-50 lg:hidden pt-20"
            >
              <div className="mx-4 bg-obsidian/98 backdrop-blur-2xl border border-white/8 rounded-2xl overflow-hidden">
                <div className="p-5 space-y-1">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`
                            flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl transition-all duration-200
                            ${isActive
                              ? "bg-white/8 text-white"
                              : "text-gray-400 hover:bg-white/4 hover:text-white/90"
                            }
                          `}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="mobileActiveDot"
                              className="w-1.5 h-1.5 rounded-full bg-white"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="pt-4 mt-3 border-t border-white/6"
                  >
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-white text-void py-3.5 rounded-xl text-sm font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Konsultasi Gratis
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}