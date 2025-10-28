/**
 * Header Component
 * 
 * Sticky navigation that hides on scroll down, shows on scroll up.
 * Features: Desktop nav with hover effects, mobile hamburger menu with drawer.
 * Includes skip-to-content link for accessibility.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { navVariants, mobileMenuVariants } from '../animations/variants';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Templates', href: '#templates' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection(20);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll position for background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Hide nav when scrolling down, show when scrolling up
  const shouldShowNav = scrollDirection !== 'down' || scrolled === false;

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Main Navigation */}
      <AnimatePresence>
        {shouldShowNav && (
          <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-glass-border shadow-glass'
                : 'bg-transparent'
            }`}
            variants={shouldReduceMotion ? {} : navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Logo */}
              <a
                href="#"
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
                aria-label="Chronicle - Home"
              >
                {/* [PLACEHOLDER] Replace with your logo/brand name */}
                Chronicle
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
                  >
                    {link.label}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* CTA Buttons - Desktop */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="#login"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Sign In
                </a>
                <a
                  href="#signup"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-glow-blue transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Started
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-text-primary hover:text-accent-blue transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-bg-secondary border-l border-glass-border z-50 md:hidden overflow-y-auto"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-glass-border">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-text-primary hover:text-accent-blue transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-glass-border rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Drawer CTA Buttons */}
              <div className="p-6 space-y-3 border-t border-glass-border">
                <a
                  href="#login"
                  className="block w-full px-6 py-3 text-center text-text-secondary hover:text-text-primary border border-glass-border rounded-xl hover:border-glass-glow transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href="#signup"
                  className="block w-full px-6 py-3 text-center rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-glow-blue transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

