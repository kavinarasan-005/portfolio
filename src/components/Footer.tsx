/**
 * Footer Component
 * 
 * Features:
 * - Huge outlined wordmark in background (Chronicle signature style)
 * - Footer links grid
 * - Social media links
 * - Legal/copyright row
 * - Parallax effect on wordmark
 */

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Templates', href: '#templates' },
    { label: 'Integrations', href: '#integrations' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press Kit', href: '#press' },
  ],
  Resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'Help Center', href: '#help' },
    { label: 'Community', href: '#community' },
    { label: 'API Reference', href: '#api' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'GDPR', href: '#gdpr' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export const Footer = () => {
  const { y } = useParallax({ strength: 0.02, type: 'scroll' });

  return (
    <footer className="relative overflow-hidden bg-bg-secondary border-t border-glass-border">
      {/* Huge Background Wordmark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ y }}
      >
        <h2
          className="text-[20vw] md:text-[18vw] lg:text-[16vw] font-black text-transparent opacity-5"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)',
            color: 'transparent',
          }}
        >
          {/* [PLACEHOLDER] Replace with your brand name */}
          CHRONICLE
        </h2>
      </motion.div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity inline-block mb-4"
            >
              Chronicle
            </a>
            <p className="text-text-muted text-sm mb-6">
              Transform your workflow into something beautiful.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-glass-glow transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-text-primary font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup (Optional) */}
        <div className="glass-card p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Stay in the loop
            </h3>
            <p className="text-text-secondary mb-6">
              Get the latest updates, tips, and exclusive content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-bg-primary border border-glass-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-glow-blue transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Chronicle. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a
              href="#status"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Status
            </a>
            <a
              href="#changelog"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Changelog
            </a>
            <a
              href="#sitemap"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

